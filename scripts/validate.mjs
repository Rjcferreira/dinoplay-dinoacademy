import {access,readFile} from 'node:fs/promises';
import {resolve} from 'node:path';
const root=resolve(import.meta.dirname,'..');
const fail=m=>{throw new Error(`DinoPlay validation failed: ${m}`)};
const manifest=JSON.parse(await readFile(resolve(root,'manifest.json'),'utf8'));
if(manifest.schemaVersion!==1)fail('schemaVersion must be 1');
if(!/^[a-z][a-z0-9-]{2,31}$/.test(manifest.id||''))fail('invalid id');
if(!/^\d+\.\d+\.\d+$/.test(manifest.version||''))fail('version must use semver');
if(!['learn','puzzle','create','explore','action','sports','music'].includes(manifest.category))fail('invalid category');
if(manifest.offline!==true)fail('games must work offline');
if(!Array.isArray(manifest.assets)||!manifest.assets.length)fail('assets are required');
const safe=p=>typeof p==='string'&&p.length<180&&!/^(?:[a-z]+:|\/|\\)/i.test(p)&&!p.split(/[\\/]/).includes('..');
for(const p of [manifest.entry,manifest.cover,...manifest.assets]){if(!safe(p))fail(`unsafe path ${p}`);await access(resolve(root,p)).catch(()=>fail(`missing asset ${p}`))}
const html=await readFile(resolve(root,manifest.entry),'utf8');
if(/https?:\/\//i.test(html))fail('remote resources are forbidden');
if(!html.includes('Content-Security-Policy'))fail('Content Security Policy is required');
if(!html.includes('dinoplay-game-sdk.js'))fail('DinoPlay SDK is required');
console.log(`${manifest.name} ${manifest.version}: valid DinoPlay package (${manifest.assets.length} assets).`);
