import { createStore } from "vuex";

export const store = createStore({
  state: {
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
    activeScene: (state) => {
      return state.activeScene;
    },
    totalScene: (state) => {
      return state.totalScene;
    },
    categories: (state) => {
      return state.categories;
    },
    getDatas: (state) => {
      return state.datas;
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
