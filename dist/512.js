let r=Uint8Array.from(atob("JAEcGgQBARovAQoBBAEFFwEfAcSI"),e=>e.codePointAt()),f=Array.from(new TextDecoder().decode(r),e=>e.codePointAt());function*i(){let e=0,o=0;for(let t of f){if(o%2)for(;t--;)yield String.fromCodePoint(e++);else e+=t;o++}}export{i as default};
