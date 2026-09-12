const houses = [
  { id: 1, tip: "Yeni tikili", otaq: "3 otaqlı", qiymet: 185000, il: 2021, sahe: 92, mertebe: 7, sened: "Kupça", temir: "Təmirli", menzere: "Şəhər mənzərəli", esya: "Əşyalı", rayon: "Nəsimi", sekil: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=250&fit=crop" },
  { id: 2, tip: "Köhnə tikili", otaq: "2 otaqlı", qiymet: 96000, il: 1998, sahe: 55, mertebe: 3, sened: "Müqavilə", temir: "Orta təmir", menzere: "Həyət mənzərəli", esya: "Əşyasız", rayon: "Gəncə", sekil: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=250&fit=crop" },
  { id: 3, tip: "Həyət evi", otaq: "5 otaqlı", qiymet: 320000, il: 2019, sahe: 180, mertebe: 2, sened: "Kupça", temir: "Təmirli", menzere: "Bağ mənzərəli", esya: "Əşyalı", rayon: "Gəncə", sekil: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=400&h=250&fit=crop" },
  { id: 4, tip: "Yeni tikili", otaq: "1 otaqlı", qiymet: 78000, il: 2020, sahe: 48, mertebe: 12, sened: "Kupça", temir: "Təmirsiz", menzere: "Dəniz mənzərəli", esya: "Əşyasız", rayon: "Xətai", sekil: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=250&fit=crop" },
  { id: 5, tip: "Yeni tikili", otaq: "4 otaqlı", qiymet: 265000, il: 2024, sahe: 128, mertebe: 9, sened: "Kupça", temir: "Təmirli", menzere: "Şəhər mənzərəli", esya: "Əşyalı", rayon: "Yasamal", sekil: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&h=250&fit=crop" },
  { id: 6, tip: "Köhnə tikili", otaq: "3 otaqlı", qiymet: 142000, il: 2005, sahe: 78, mertebe: 5, sened: "Kupça", temir: "Orta təmir", menzere: "Həyət mənzərəli", esya: "Əşyalı", rayon: "Nərimanov", sekil: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=400&h=250&fit=crop" },
  { id: 7, tip: "Həyət evi", otaq: "6 otaqlı", qiymet: 450000, il: 2022, sahe: 240, mertebe: 3, sened: "Kupça", temir: "Təmirli", menzere: "Bağ mənzərəli", esya: "Əşyalı", rayon: "Abşeron", sekil: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=250&fit=crop" },
  { id: 8, tip: "Yeni tikili", otaq: "2 otaqlı", qiymet: 118000, il: 2023, sahe: 68, mertebe: 14, sened: "Kupça", temir: "Təmirli", menzere: "Dəniz mənzərəli", esya: "Əşyasız", rayon: "Sumqayıt", sekil: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=400&h=250&fit=crop" },
  { id: 9, tip: "Bağ evi", otaq: "4 otaqlı", qiymet: 155000, il: 2013, sahe: 145, mertebe: 2, sened: "Müqavilə", temir: "Orta təmir", menzere: "Bağ mənzərəli", esya: "Əşyasız", rayon: "Sumqayıt", sekil: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=400&h=250&fit=crop" },
  { id: 10, tip: "Köhnə tikili", otaq: "3 otaqlı", qiymet: 134000, il: 2008, sahe: 82, mertebe: 6, sened: "Kupça", temir: "Təmirsiz", menzere: "Şəhər mənzərəli", esya: "Əşyasız", rayon: "Gəncə", sekil: "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=400&h=250&fit=crop" },
  { id: 11, tip: "Yeni tikili", otaq: "1 otaqlı", qiymet: 72000, il: 2021, sahe: 45, mertebe: 8, sened: "Kupça", temir: "Təmirli", menzere: "Həyət mənzərəli", esya: "Əşyalı", rayon: "Mingəçevir", sekil: "https://images.unsplash.com/photo-1494526585095-c41746248156?w=400&h=250&fit=crop" },
  { id: 12, tip: "Həyət evi", otaq: "5 otaqlı", qiymet: 380000, il: 2018, sahe: 200, mertebe: 2, sened: "Kupça", temir: "Təmirli", menzere: "Bağ mənzərəli", esya: "Əşyalı", rayon: "Bakı", sekil: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=400&h=250&fit=crop" },
  { id: 13, tip: "Köhnə tikili", otaq: "2 otaqlı", qiymet: 88000, il: 2001, sahe: 52, mertebe: 4, sened: "Müqavilə", temir: "Orta təmir", menzere: "Şəhər mənzərəli", esya: "Əşyasız", rayon: "Lənkəran", sekil: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400&h=250&fit=crop" },
  { id: 14, tip: "Yeni tikili", otaq: "4 otaqlı", qiymet: 298000, il: 2022, sahe: 135, mertebe: 16, sened: "Kupça", temir: "Təmirli", menzere: "Dəniz mənzərəli", esya: "Əşyalı", rayon: "Bakı", sekil: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=250&fit=crop" },
  { id: 15, tip: "Bağ evi", otaq: "3 otaqlı", qiymet: 128000, il: 2013, sahe: 110, mertebe: 2, sened: "Müqavilə", temir: "Təmirsiz", menzere: "Bağ mənzərəli", esya: "Əşyasız", rayon: "Şirvan", sekil: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=400&h=250&fit=crop" },
  { id: 16, tip: "Yeni tikili", otaq: "3 otaqlı", qiymet: 176000, il: 2020, sahe: 88, mertebe: 11, sened: "Kupça", temir: "Təmirli", menzere: "Şəhər mənzərəli", esya: "Əşyalı", rayon: "Yasamal", sekil: "https://images.unsplash.com/photo-1554995207-c18c203602cb?w=400&h=250&fit=crop" },
  { id: 17, tip: "Köhnə tikili", otaq: "2 otaqlı", qiymet: 102000, il: 2006, sahe: 60, mertebe: 7, sened: "Kupça", temir: "Orta təmir", menzere: "Həyət mənzərəli", esya: "Əşyasız", rayon: "Nəsimi", sekil: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=400&h=250&fit=crop" },
  { id: 18, tip: "Həyət evi", otaq: "6 otaqlı", qiymet: 520000, il: 2023, sahe: 280, mertebe: 3, sened: "Kupça", temir: "Təmirli", menzere: "Bağ mənzərəli", esya: "Əşyalı", rayon: "Abşeron", sekil: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=400&h=250&fit=crop" },
  { id: 19, tip: "Yeni tikili", otaq: "1 otaqlı", qiymet: 69000, il: 2019, sahe: 44, mertebe: 5, sened: "Kupça", temir: "Təmirsiz", menzere: "Şəhər mənzərəli", esya: "Əşyasız", rayon: "Xətai", sekil: "https://images.unsplash.com/photo-1522156373667-4c7234bbd804?w=400&h=250&fit=crop" },
  { id: 20, tip: "Köhnə tikili", otaq: "3 otaqlı", qiymet: 138000, il: 2003, sahe: 76, mertebe: 4, sened: "Müqavilə", temir: "Orta təmir", menzere: "Həyət mənzərəli", esya: "Əşyalı", rayon: "Nərimanov", sekil: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=400&h=250&fit=crop" }
];

const container = document.getElementById("container");
const tip = document.getElementById('tip')
const otaq = document.getElementById('otaq')
const rayon = document.getElementById('rayon')
const sened = document.getElementById('sened')
const temir = document.getElementById('temir')
const minQiymet = document.getElementById('minQiymet')
const maxQiymet = document.getElementById('maxQiymet')
const search = document.getElementById('search')
const tipler = [... new Set(houses.map(item => item.tip.trim()))]
const otaqlar = [... new Set(houses.map(item => item.otaq.trim()))]
const rayonlar = [... new Set(houses.map(item => item.rayon.trim()))]
const senedler = [...new Set(houses.map(item => item.sened.trim()))];
const temirler = [...new Set(houses.map(item => item.temir.trim()))];

function goster(list) {
    container.innerHTML = list.map(item => `
      <div class="bg-white rounded-lg shadow-sm hover:shadow-lg transition overflow-hidden cursor-pointer border border-gray-100">
          <div class="relative">
          <img src="${item.sekil}" alt="${item.tip} ${item.otaq}" class="w-full h-44 object-cover">
          <span class="absolute top-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded">${item.rayon}</span>
          </div>
          <div class="p-3"> 
          <p class="text-red-600 font-bold text-lg">${item.qiymet} ₼</p>
          <h3 class="font-semibold text-gray-800 mt-1">${item.tip} ${item.otaq}</h3>
          <p class="text-gray-500 text-sm mt-1">${item.il} • ${item.sahe} m<sup>2</sup> • ${item.mertebe} mərtəbə</p>
          <div class="flex gap-2 mt-2 flex-wrap">
              <span class="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded">${item.sened}</span>
              <span class="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded">${item.temir}</span>
              <span class="text-[11px] bg-gray-100 text-gray-600 px-2 py-0.5 rounded">${item.menzere}</span>
          </div>
          </div>
      </div>
        `).join('');
}


    goster(houses)

    

    tipler.forEach(function(m){
      tip.innerHTML += `<option value="${m}">${m}</option>`
    })
    otaqlar.forEach(function(m){
      otaq.innerHTML += `<option value="${m}">${m}</option>`
    })
    rayonlar.forEach(function(m){
      rayon.innerHTML += `<option value="${m}">${m}</option>`
    })
    senedler.forEach(function(m) {
        sened.innerHTML += `<option value="${m}">${m}</option>`;
    });
    temirler.forEach(function(m) {
        temir.innerHTML += `<option value="${m}">${m}</option>`;
    });

    function filterhouses() {
        const sozler = search.value.toLowerCase().trim().split(/\s+/);

        const min = Number(minQiymet.value) || 0;
        const max = Number(maxQiymet.value) || Infinity;

        const netice = houses.filter(function(item) {

            const metn = Object.values(item).join(" ").toLowerCase();

            return sozler.every(function(soz) {
                return metn.includes(soz);
            }) &&
            item.qiymet >= min &&
            item.qiymet <= max &&
            (!tip.value || item.tip === tip.value) &&
            (!otaq.value || item.otaq === otaq.value) &&
            (!rayon.value || item.rayon === rayon.value) &&
            (!sened.value || item.sened === sened.value) &&
            (!temir.value || item.temir === temir.value);
        });

        goster(netice);
    }

    tip.addEventListener("change", filterhouses);
    otaq.addEventListener("change", filterhouses);
    rayon.addEventListener("change", filterhouses);
    sened.addEventListener("change", filterhouses);
    temir.addEventListener("change", filterhouses);
    minQiymet.addEventListener("input", filterhouses);
    maxQiymet.addEventListener("input", filterhouses);
    search.addEventListener("input", filterhouses);


    function sifirla() {
    tip.value = "";
    otaq.value = "";
    rayon.value = "";
    sened.value = "";
    temir.value = "";
    minQiymet.value = "";
    maxQiymet.value = "";
    search.value = "";

    goster(houses);
}
