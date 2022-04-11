import { createStore } from "vuex";

export const store = createStore({
  state: {
    cities : [
      "Adana",
      "Adıyaman",
      "Afyon",
      "Ağrı",
      "Amasya",
      "Ankara",
      "Antalya",
      "Artvin",
      "Aydın",
      "Aksaray",
      "Ardahan",
      "Balıkesir",
      "Bilecik",
      "Bingöl",
      "Bitlis",
      "Bayburt",
      "Bolu",
      "Batman",
      "Burdur",
      "Bartın",
      "Bursa",
      "Çanakkale",
      "Çankırı",
      "Çorum",
      "Denizli",
      "Diyarbakır",
      "Düzce",
      "Edirne",
      "Elazığ",
      "Erzincan",
      "Erzurum",
      "Eskişehir",
      "Gaziantep",
      "Giresun",
      "Gümüşhane",
      "Hakkari",
      "Hatay",
      "Isparta",
      "Mersin",
      "Iğdır",
      "İstanbul",
      "İzmir",
      "Kars",
      "Kastamonu",
      "Kayseri",
      "Kırklareli",
      "Kırşehir",
      "Kocaeli",
      "Konya",
      "Kütahya",
      "Malatya",
      "Manisa",
      "Kahramanmaraş",
      "Karabük",
      "Kilis",
      "Karaman",
      "Kırıkkale",
      "Mardin",
      "Muğla",
      "Muş",
      "Nevşehir",
      "Niğde",
      "Ordu",
      "Osmaniye",
      "Rize",
      "Sakarya",
      "Samsun",
      "Siirt",
      "Sinop",
      "Sivas",
      "Tekirdağ",
      "Tokat",
      "Trabzon",
      "Tunceli",
      "Şanlıurfa",
      "Şırnak",
      "Uşak",
      "Van",
      "Yozgat",
      "Yalova",
      "Zonguldak",
    ],
    jobs : ["Yazılımcı", "İşletme", "Esnaf"],
    formRadioDatas1 : [
      {
        id: 1,
        catID: 1,
        text: "Çocuklarımın geleceği",
      },
      {
        id: 2,
        catID: 3,
        text: "İstediğim gibi yaşayamamak",
      },
      {
        id: 3,
        catID: 2,
        text: "Yüksek fiyatlar",
      },
      {
        id: 4,
        catID: 5,
        text: "Özgürce kendimi ifade edememek",
      },
      {
        id: 5,
        catID: 3,
        text: "Barınma sorunu",
      },
      {
        id: 6,
        catID: 3,
        text: "Emekli olarak geçinememek",
      },
      {
        id: 7,
        catID: 4,
        text: "Tarım politikası",
      },
      {
        id: 8,
        catID: 3,
        text: "Engelli olmak",
      },
      {
        id: 9,
        catID: 5,
        text: "Adalet eksikliği",
      },
      {
        id: 10,
        catID: 2,
        text: "Esnaf olarak var olmaya çalışmak",
      },
      {
        id: 11,
        catID: 3,
        text: "İşsizlik",
      },
      {
        id: 12,
        catID: 3,
        text: "Kadın olarak kendimi güvende hissetmemek",
      },
      {
        id: 13,
        catID: 4,
        text: "Çiftçi olarak üretmemek",
      },
      {
        id: 14,
        catID: 5,
        text: "Genç olarak ülkeye güvenmemek",
      },
    ],
    formRadioDatas2 : [
      {
        id: 15,
        catID: 2,
        text: "Ekonomik durgunluk",
      },

      {
        id: 16,
        catID: 5,
        text: "Adalet, hukuk ve yargı sorunu",
      },
      {
        id: 17,
        catID: 1,
        text: "Eğitim ve öğretim sorunu",
      },
      {
        id: 18,
        catID: 6,
        text: "Cumhurbaşkanlığı Hükümet sistemi",
      },
      {
        id: 19,
        catID: 4,
        text: "Tarım ve üretim",
      },
      {
        id: 20,
        catID: 2,
        text: "Hayat pahalılığı",
      },
      {
        id: 21,
        catID: 5,
        text: "Denge ve denetleme ve kuvvetler ayrılığı",
      },
      {
        id: 22,
        catID: 3,
        text: "Engelli sorunu",
      },
      {
        id: 23,
        catID: 3,
        text: "Kadına yönelik şiddet ve kadın-erkek eşitliği",
      },
      {
        id: 24,
        catID: 7,
        text: "İklim krizi ve çevre sorunu",
      },
      {
        id: 25,
        catID: 5,
        text: "Liyakat sorunu",
      },
      {
        id: 26,
        catID: 3,
        text: "Sağlık, aile ve çocuk politikaları sorunu",
      },
    ],
    formRadioDatas3 : [
      {
        id: 27,
        text: "Özgür",
      },
      {
        id: 28,
        text: "Zengin",
      },
      {
        id: 29,
        text: "Güçlü",
      },
      {
        id: 30,
        text: "Mutlu",
      },
      {
        id: 31,
        text: "Huzurlu",
      },
    ],
    activeScene: 1,
    totalScene: 4,
    categories: [
      {
        catID: 1,
        cat: "yarına atılım",
        answers: [
          {
            text: "Girişimcinin prangalarını çözen start-up kanunu ve yasakların kaldıracağız",
          },
          {
            text: "Yenilikçiliğin önünü açan, tüketiciyi koruyan, dünyayla entegre kripto para mevzuatı",
          },
          {
            text: "5H Internet: hızlı, her yerde, hesaplı, hizmet odaklı, hür",
          },
          {
            text: "Yeni dünyaya uygun yeni kamu mimarisi: Siber Kuvvetler, Silikon Vadisi’ne büyükelçi, Teknoloji Bakanlığı",
          },
        ],
      },
      {
        catID: 2,
        cat: "Ekonomi",
        answers: [
          {
            text: "Herkesin insan onuruna yaraşır, iş, gelir ve refah düzeyine kavuşmasını sağlayacağız.",
          },
          {
            text: "Türkiye’yi “Orta Gelir Tuzağı”ndan kurtarıp “Yüksek Gelirli Ülkeler Grubu”na yükselteceğiz.",
          },
          {
            text: "Türk lirasına yeniden itibar ve istikrar kazandıracağız.Enflasyonu düşük, tek haneli düzeylere indireceğiz.",
          },
          {
            text: "Enflasyonu yeniden tek haneye indireceğiz",
          },
          {
            text: "Aşırı yoksulluğu yeniden sıfırlayacağız",
          },
          {
            text: "Yüksek teknolojiye dayalı, katma değeri yüksek ürün ihraç eden bir ülke olacağız.",
          },
        ],
      },
      {
        catID: 3,
        cat: "sosyal",
        answers: [
          {
            text: "Emekli aylıklarını satın alma gücünü koruyacak şekilde artıracağız.",
          },
          {
            text: "İşsizlik ödeneğinden yararlanan insan sayısını, yararlanma süresini ve ödeme miktarını artıracağız.",
          },
          {
            text: "Emeklilikte yaşa takılanların (EYT) sorunlarını çözüme kavuşturacağız.",
          },
          {
            text: "Yıpranma payı uygulamasını tehlike işler sınıfından çalışanlar için daha adaletli bir hale getireceğiz. ",
          },
          {
            text: "Kayıt dışı istihdamın önüne geçeceğiz",
          },
        ],
      },
      {
        catID: 4,
        cat: "Tarım",
        answers: [
          {
            text: "Çiftçierin borçlarını en a 2 yıl faizsiz erteleyeceğiz",
          },
          {
            text: "Çiftçinin kullandığı mazot ÖTV'sini geri verceğiz",
          },
          {
            text: "Çiftçilerin kullandığı gübre maliyetinin %50sii destek olarak geri vereceğiz",
          },
          {
            text: "Elektrik çiftçiye daha ucuz verilecek",
          },
          {
            text: "Çiftçilerin toprağına, traktörüne haciz gelmeyecek",
          },
        ],
      },
      {
        catID: 5,
        cat: "demokrasi",
        answers: [
          {
            text: "Siyasal sistemi demoktratikleştiriyouz.",
          },
          {
            text: "Yasamayı güçlendiriyoruz temsil yeteneği yüksek ve etkili bir meclis öneriyoruz.",
          },
          {
            text: "Yürütmeyi ve İdareyi Güçlendiriyoruz: İstikrarlı Bir Hükûmet ve Etkili Bir Yönetim Öneriyoruz.",
          },
        ],
      },
      {
        catID: 6,
        cat: "cumhurbaskanlığı",
        answers: [
          {
            text: "Cumhurbaşkanın yetkilerini sınırlandıracağız",
          },
          {
            text: "Meclisin denetim mekanizmalarını arttıracağız",
          },
          {
            text: "kamu kurumlarını meclisin denetimine tabii tutacağız",
          },
          {
            text: "Meclisin bütçe hakkını güçlendireceğiz",
          },
          {
            text: "Mecliste demokratik temisli arttıracağız",
          },
          {
            text: "Siyasette şeffalığı ve dürüstlüğü güvence altına alacağız",
          },
        ],
      },
      {
        catID: 7,
        cat: "afet",
        answers: [
          {
            text: "Merkezi idarenin afet yönetimi ile ilgili yetkilerini ‘yerinden yönetim’ ilkesini esas alan bir yaklaşımla yeniden düzenleyeceğiz.",
          },
          {
            text: "Bilim insanlarının uyardığı İstanbul depremine karşı, risk azaltmayı hedefleyen HAYAT İSTANBUL Projesini başlatacağız",
          },
          {
            text: "Afet Çerçeve Kanunu çıkartarak afet hukuku bağlamında afet mevzuatını tüm yönleriyle yeniden düzenleyeceğiz.",
          },
        ],
      },
    ],
    datas: [],
    selectedDatas : []
  },
  getters: {
    getActiveScene: (state) => {
      return state.activeScene;
    },
    getTotalScene: (state) => {
      return state.totalScene;
    },
    getCategories: (state) => {
      return state.categories;
    },
    getDatas: (state) => {
      return state.datas;
    },
    getCities: (state) => {
      return state.cities;
    },
    getJobs: (state) => {
      return state.jobs;
    },
    getformRadioDatas1: (state) => {
      return state.formRadioDatas1;
    },
    getformRadioDatas2: (state) => {
      return state.formRadioDatas2;
    },
    getformRadioDatas3: (state) => {
      return state.formRadioDatas3;
    }
  },
  mutations: {
    activeSceneIncrease(state, payload) {
      state.activeScene += payload;
    },
    finishForm(state, payload) {
      state.selectedDatas.push(payload.category1ID, payload.category2ID, payload.category3ID);
      let item = state.selectedDatas;
      let uniqueitem = [...new Set(item)];
      state.selectedDatas = uniqueitem;
      state.activeScene = "end";
      state.datas = payload;
    }
  }
});
