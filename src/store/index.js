import { createStore } from "vuex";

export const store = createStore({
    state: {
      // yarına atılım    	  1
      // Ekonomi    		    	2
      // sosyal    		      	3
      // Tarım    		 	      4
      // demokrasi    	 	    5
      // cumhurbaskanlığı     6
      // afet				          7
      // Yerel Yönetimler	    8
      cities: [
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
      jobs: ["Esnaf", "Emekli", "Ticaret", "Ev hanımı", "Bilişim", "Sağlık Çalışanı", "Öğretmen","Çiftçi","Diğer"],
      formRadioDatas: [
        {
          id: 1,
          imageId:1,
          catID: 1,
          text: "Çocuklarımın geleceğinden endişeliyim",
          answers: [
            {
              text: "Ötekileştirme hissi doğuran tüm uygulamaları ortadan kaldıracağız."
            },
            {
              text: "Temel hak ve özgürlükleri etnik köken, dil, din, mezhep, cinsiyet, siyasi ve sosyal aidiyet farkı gözetmeksizin tüm insanlar için güvenceye kavuşturacak ve iç hukukumuzu uluslararası standartlarla uyumlu kılacağız."
            },
            {
              text: "Etnik, dini, mezhebi ve kültürel çeşitliliğimizi dikkate alarak toplumdaki tüm farklılıkları kucaklayan bir vatandaşlık anlayışı geliştireceğiz."
            },
            {
              text: "Devlet başkanı olarak cumhurbaşkanın görevini yerine getirirken milletin ve devletin birliğini temsil etmesini ve ayrım gözetmeden halkın her kesimine eşit mesafede olmasını sağlayacağız."
            },
            {
              text: "Yolsuzluk konusunda toplumsal duyarlılığı harekete geçirerek farkındalığı artıracağız."
            },
            {
              text: "Aktif iş gücü politikalarıyla ve eğitime yeni bir bakış açısı kazandırmak suretiyle nitelikli istihdamı artıracak, işsizliği azaltacağız."
            },
            {
              text: "Geleceğin mesleklerini belirleyecek çalışmaları hızlandıracağız."
            },
            {
              text: "Teknoloji ve Bilişim Liselerini yaygınlaştıracağız."
            },
            {
              text: "Gençlerin istihdam edilebilirliklerini artıracağız."
            },
            {
              text: "Okul sonrası eğitmenli aktivite merkezlerini ve kreşleri artıracağız."
            },
            {
              text: "Sosyal medyada ifade özgürlüğünün korunmasından, devletin siber güvenliğinin sağlanmasına kadar her alanda yenilikler getireceğiz"
            },
            {
              text: "Teknopark teşviklerini fiziksel mekândan bağımsız hale getirerek tüm Türkiye’yi teknopark yapacağız."
            },
            {
              text: "Yapay zekâ, girişimcilik ve siber güvenlik gibi alanları lisede seçmeli ders olarak okutacağız."
            },
            {
              text: "Liseden mezun olan her gence algoritma ve temel kodlama bilgisine sahip olma imkânı tanıyacağız."
            },
            {
              text: "Veri okuma, sosyal medya okur yazarlığı ve güvenli internet kullanımını ilköğretimden itibaren, her yaş grubuna uygun seviyelerde, müfredata koyacağız."
            },
          ]
        },
        {
          id: 2,
          imageId:5,
          catID: 5,
          text: "İstediğim gibi yaşayamamak",
          answers: [
            {
              text: "Ötekileştirme hissi doğuran tüm uygulamaları ortadan kaldıracağız"
            },
            {
              text: "Temel hak ve özgürlükleri etnik köken, dil, din, mezhep, cinsiyet, siyasi ve sosyal aidiyet farkı gözetmeksizin tüm insanlar için güvenceye kavuşturacak ve iç hukukumuzu uluslararası standartlarla uyumlu kılacağız."
            },
            {
              text: "Etnik, dini, mezhebi ve kültürel çeşitliliğimizi dikkate alarak toplumdaki tüm farklılıkları kucaklayan bir vatandaşlık anlayışı geliştireceğiz."
            },
            {
              text: "İfade,toplanmaveörgütlenmeözgürlüklerininönündekibütünengellerikaldıracakvemevcut düzenlemeleri demokratik toplumun gereklerine uygun hale getireceğiz."
            },
            {
              text: "Bireylerin düşündüklerini özgürce ifade edebildikleri, ortak çıkarları etrafında birleşebildikleri ve taleplerini barışçıl olarak rahatça ortaya koyabildikleri açık bir toplum yapısı oluşturacağız."
            }
          ]
        },
        {
          id: 3,
          imageId:2,
          catID: 2,
          text: "Yüksek fiyatlar yaşamı zorlaştırıyor",
          answers: [
            {
              text: "Türkiye’yi “Orta Gelir Tuzağı”ndan kurtarıp “Yüksek Gelirli Ülkeler Grubu”na yükselteceğiz."
            },
            {
              text: "Herkesin insan onuruna yaraşır, iş, gelir ve refah düzeyine kavuşmasını sağlayacağız.",
            },
            {
              text: "Fert başına millî geliri iktidarımızın birinci dönemi sonunda yüksek gelirli ülkeler grubu eşiğinin üzerine çıkaracağız."
            },
            {
              text: "Türk lirasına yeniden itibar ve istikrar kazandıracağız."
            },
            {
              text: "Enflasyonu düşük, tek haneli düzeylere indireceğiz."
            },
            {
              text: "Türkiye’ye yeniden “Yatırım Yapılabilir Ülke” statüsü kazandıracağız."
            },
            {
              text: "İşsizlik oranını tek haneli seviyeye düşüreceğiz."
            },
            {
              text: "Yüksek teknolojiye dayalı, katma değeri yüksek ürün ihraç eden bir ülke olacağız."
            },
            {
              text: "Dünya pazarlarındaki piyasa payımızı artırarak ekonomimizi sürdürülebilir bir dış denge yapısına kavuşturacağız."
            },
            {
              text: "Aşırı yoksulluğu sıfırlayacağız."
            }
          ]
        },
        {
          id: 4,
          imageId:5,
          catID: 5,
          text: "Özgürce kendimi ifade edememek",
          answers: [            
              {
                text: "İfade, toplanma ve örgütlenme özgürlüklerinin önündeki bütün engelleri kaldıracak ve mevcut düzenlemeleri demokratik toplumun gereklerine uygun hale getireceğiz"
              },
              {
                text: "Gazetecilere karşı cezai soruşmaya gerekçe yapılan mevzuatı AİHM içtihatları çerçevesinde yeniden düzenleyeceğiz."
              },
              {
                text: "Keyfi akreditasyon kararlarını engelleyeceğiz."
              },
              {
                text: "Basın kartlarının verilmesinde ve mesleğe kabulde meslek kuruluşları tarafından oluşturulacak bir kurulun etkili olmasını sağlayacağız."
              },
              {
                text: "İnternet mevzuatını uluslararası standartlara uygun olarak, ifade özgürlüğünü ve bilgiye erişimi kısıtlamayacak şekilde yeniden düzenleyeceğiz"
              }         
          ]
        },
        {
          id: 5,
          imageId:3,
          catID: 3,
          text: "Barınma problemi",
          answers : [
            {
              text : "Şehir hayatında hiç kimseyi geride bırakmadan, herkesin insanca yaşamasını sağlayacağız. Vatandaşlarımızın temel ihtiyaçlarını karşılayabilecekleri şehirler oluşturacağız."
            },
            {
              text : "Temel insan haklarından olan barınma hakkını ‘Konut Edinme Hakkı’ kavramı çerçevesinde ele alıp somut uygulamalar yapacağız."
            },
            {
              text : "Dar gelirliler için konut edindirme teşvikleri belirleyecek aynı zamanda uygun koşullu sosyal konut kiralama uygulamasına geçeceğiz."
            },
            {
              text : "TOKİ’yi yeniden yapılandıracağız. Haksız kazanç temin eden uygulamalarına son vereceğiz."
            },
            {
              text : "Kadın Dostu Kentler programını yaygınlaştıracağız."
            },
            {
              text : "Engelli vatandaşlarımızın belirli sürelerle sağlık, bakım ve barınma ihtiyaçlarının karşılanacağı kısa süreli bakım merkezlerini açarak engellilerimize konforlu yaşam alanları oluşturacağız."
            },
            {
              text : "Dar gelirli ailelere ucuz ve düşük kirayla konut temin edeceğiz."
            },
            {
              text : "Şehit yakını ve gazilerin konut ihtiyaçlarını karşılayacağız."
            },
            {
              text : "Yoksul ailelerimize kış aylarında ısınma yardımı yapacağız."
            },
            {
              text : "Sokakta yaşayan, kimsesiz tüm çocukları sosyal koruma altına alarak huzurlu ve güvenli bir yaşam sürmelerini sağlayacağız."
            }
          ]
        },
        {
          id: 6,
          imageId:2,
          catID: 2,
          text: "Emekli olarak geçinememek",
          answers : [
            {
              text : "Emekli aylıklarını satın alma gücünü koruyacak şekilde artıracağız."
            },
            {
              text : "Düşük emekli aylığı alan emeklilerimize daha yüksek tutarda bayram ikramiyesi vereceğiz."
            },
            {
              text : "Ölüm aylığı alanlara verilen bayram ikramiyeler üzerinden yapılan kesintiyi kaldıracağız."
            },
            {
              text : "Emeklilerle ve bankalar arasındaki promosyon şartlarını emekliler lehine düzenleyeceğiz."
            },
            {
              text : "Emekli aylıklarına vergi iadesi yerine getirilmiş ek ödeme oranlarını yeniden gözden geçireceğiz."
            },
            {
              text : "Emeklilikte yaşa takılanların (EYT) sorunlarını çözüme kavuşturacağız."
            },
            {
              text : "Daha uzun süre çalışanın daha fazla emekli aylığı almasını sağlayacağız‘ ’Yıpranma Payı’’ uygulamasını ‘’tehlikeli işler’’ sınıfında çalışanlar için daha adil bir hale getireceğiz."
            },
            {
              text : "Risk seviyesi yüksek işlerde çalışanların hizmet sürelerine eklenen prim gün sayısını arttıracağız."
            }
          ]
        },
        {
          id: 7,
          imageId:4,
          catID: 4,
          text: "Tarım politikasındaki yetersizlikler",
          answers : [
            {
              text : "Çiftçilerin borçlarını en az 2 yıl faizsiz olarak erteleyeceğiz."
            },
            {
              text : "Çiftçilerin kullandığı mazot ÖTV’sini geri vereceğiz."
            },
            {
              text : "Çiftçilere kullandığı gübre maliyetinin %50’sini destek olarak geri vereceğiz."
            },
            {
              text : "Çiftçilerin toprağına, traktörüne haciz gelmeyecek, üretimi aksamayacak."
            },
            {
              text : "Elektrik çiftçiye daha ucuz verilecek."
            },
            {
              text : "Sadece aracıların değil çiftçilerin de kazandığı bir sistem oluşturacağız."
            },
            {
              text : "Tarımda ithalat yerine, içeride üretimi destekleyeceğiz."
            },
            {
              text : "Sözleşmeli tarımın yasal altyapısını güçlendirip, üretici-sanayici işbirliğini etkin hale getireceğiz."
            },
            {
              text : "Küçük üreticilerin pazarlama problemlerini çözeceğiz."
            },
            {
              text : "Tarım desteklerini üretim yapılan yıl açıklayacak ve aynı yıl içinde ödemelerini gerçekleştireceğiz."
            }
          ]
        },
        {
          id: 8,
          imageId:3,
          catID: 3,
          text: "Engelli olmak",
          answers : [
            {
              text : "Engelli yurttaşlarımızın engellilik seviyesine göre almış olduğu maaşları her kademe için iyileştireceğiz."
            },
            {
              text : "Evde bakım aylığı alanların, genel sağlık sigortası primlerini ödeyeceğiz, varsa geçmişe yönelik borçlarını sileceğiz."
            },
            {
              text : "Engellilerin; konaklama, bakım ve sağlık hizmetlerinden ücretsiz şekilde yararlanabileceği, kısa süreli bakım evleri ve yaşam merkezleri oluşturacağız."
            },
            {
              text : "Atamalarda ve özel sektör denetimlerinde; engelli istihdam kontenjanlarını önceliğimiz haline getireceğiz."
            },
            {
              text : "Engelli yurttaşlarımızın; toplu ulaşım araçlarına, iş yerlerine, kamu binalarına, konutlara ve tüm sosyal alanlara sorunsuz şekilde erişebilmesi için gerekli olan alt yapı çalışmalarının tümünü gerçekleştireceğiz."
            },
            {
              text : "Engelli erişimini sağlayabilmek için; kamuya, özel sektöre ve STK’lara ekonomik destek paketi sağlayacağız."
            },
            {
              text : "Engellilerimizin hem kamuda hem de özel sektörde kolay bir şekilde iş bulmasını sağlamak için beşeri sermayelerini arttırıcı; mesleki eğitim ve sertifika programlarını düzenleyeceğiz."
            },
            {
              text : "Engelli yurttaşlarımızın yasal ve insani hakkı olan çalışma hürriyetini elde etmesi için, kamu ve özel sektörde engelli istihdamına ilişkin belirlenen kontenjanların doldurulmasını sağlayacağız."
            },
            {
              text : "Engellilerin yararına çalışan STKları destekleyeceğiz."
            }
          ]
        },
        {
          id: 9,
          imageId:5,
          catID: 5,
          text: "Adalet eksikliği",
          answers : [
            {
              text : "Ötekileştirme hissi doğuran tüm uygulamaları ortadan kaldıracağız."
            },
            {
              text : "Kanun önünde eşitlik ilkesinin gereklerini sağlayacağız."
            },
            {
              text : "İfade, toplanma ve örgütlenme özgürlüklerini güvence altına alacağız."
            },
            {
              text : "Temel hak ve özgürlüklere ilişkin tüm yasal ve yapısal düzenlemelerde Avrupa İnsan Hakları Sözleşmesi’ni, uluslararası sözleşmeleri ve evrensel hukuk ilkelerini esas alacağız."
            },
            {
              text : "Kamu görevine alınmada adayların tabi tutulduğu sınavlara ilişkin adalet, dürüstlük, eşitlik, şeffaflık ve denetlenebilirliği sağlayacağız."
            },
            {
              text : "Etnik, dini, mezhebi ve kültürel çeşitliliğimizi dikkate alarak toplumdaki tüm farklılıkları kucaklayan bir vatandaşlık anlayışı geliştireceğiz."
            }
          ]
        },
        {
          id: 10,
          imageId:2,
          catID: 2,
          text: "Esnaf olarak var olmaya çalışmak",
          answers : [
            {
              text : "Küçük işyerleri başta olmak üzere işletmelerin iş yapma maliyetlerini düşüreceğiz."
            },
            {
              text : "Ücretler üzerindeki vergi yükünü azaltacağız. "
            },
            {
              text : "Vergi iade sürecini hızlandıracağız. "
            },
            {
              text : "İşyeri kira ödemelerinde stopaj oranını ve KDV oranını düşüreceğiz."
            },
            {
              text : "Sorunlu kredilere ilişkin kalıcı bir çözüm modeli geliştireceğiz."
            }
          ]
        },
        {
          id: 11,
          imageId:1,
          catID: 1,
          text: "İşsizlik",
          answers : [
            {
              text : "Kamu görevine alınmada adayların tabi tutulduğu sınavlara ilişkin adalet, dürüstlük, eşitlik, şeffaflık ve denetlenebilirliği sağlayacağız."
            },
            {
              text : "Yazılı sınav sonuçlarına itibar edeceğiz."
            },
            {
              text : "Mülakat uygulamasına son vereceğiz."
            },
            {
              text : "Yüksek performans gösteren çalışanlar için ödül sistemi geliştireceğiz."
            },
            {
              text : "Kurumların üst düzey yönetici kadrolarına atanacaklar için liyakat, başarı ve performans ölçütleri belirleyeceğiz."
            },
          ]
        },
        {
          id: 12,
          imageId:8,
          catID: 8,
          text: "Kadın olarak kendimi güvende hissetmemek",
          answers : [
            {
              text : "Kentsel yenilenme projelerinde kadın ve çocuklar için yaşanabilir alanlar üretimini geliştireceğiz."
            },
            {
              text : "Kadın Dostu Kentler programını yaygınlaştıracağız. "
            },
            {
              text : "Kadınların ekonomik hayata adil ve etkin katılımlarını sağlayacağız."
            },
            {
              text : "Mor Bayrak uygulamasını destekleyeceğiz. "
            },
            {
              text : "Kadına karşı şiddette Tek Kapı Sistemi oluşturacağız."
            },
            {
              text : "Mahallelerde kadın, aile, gençlik ve okuma merkezlerini arttıracağız."
            },
            {
              text : "Kadın ve genç girişimcilere yerel yönetimlerce, mekânsal destekler, girişimcilik ve pazarlama eğitimi, kuluçka merkezi ve hızlandırıcı programlar sağlayacağız."
            }
          ]
        },
        {
          id: 13,
          imageId:4,
          catID: 4,
          text: "Çiftçi olarak üretmemek",
          answers : [
            {
              text : "Tarımda ithalat yerine, içeride üretimi destekleyeceğiz."
            },
            {
              text : "Sözleşmeli tarımın yasal altyapısını güçlendirip, üretici-sanayici işbirliğini etkin hale getireceğiz."
            },
            {
              text : "Küçük üreticilerin pazarlama problemlerini çözeceğiz."
            },
            {
              text : "Tarımda özellikle ihtiyaç fazlası ürünlerde ihracatı destekleyecek, keyfi ihracat yasaklarına son vereceğiz."
            },
            {
              text : "Başta tohum olmak üzere tarım girdileri ve ürünlerde dışa bağımlılığı azaltacağız."
            },
            {
              text : "Üreticiler ürününü değerine satacak, emeğinin karşılığını alacak."
            },
            {
              text : "Tarım sigortası kapsamını genişleterek çiftçilerimizi risklere karşı daha iyi koruyacağız."
            }
          ]
        },
        {
          id: 14,
          imageId:1,
          catID: 1,
          text: "Genç olarak ülkeye güvenmemek",
          answers : [            
            {
              text : "Yapay zekâ, girişimcilik ve siber güvenlik gibi alanları lisede seçmeli ders olarak okutacağız."
            },
            {
              text : "Özel sektör ile iş birliği yaparak çevrimiçi ve uzaktan eğitimi en üst seviyeye çıkaracağız."
            },
            {
              text : "Avrupa Komisyonu’nun Dijital Eylem Planı doğrultusunda müfredatı dijitalleştireceğiz."
            },
            {
              text : "Bu yaklaşıma uygun eğitimcilerin yetiştirilmesinde ve müfredatın sunulacağı online eğitim platformlarının geliştirilmesinde özel sektörle iş birliği yapacağız."
            },
            {
              text : "Yeni teknolojiler sayesinde internet erişimini kırsalda yaşayan vatandaşlarımızın hizmetine sunacağız."
            },
            {
              text : "Türkiye’de kurulması zor altyapı projelerinin hayata geçirilmesinde en son teknolojiden yararlanmak için küresel oyuncularla müzakerelere başlayacağız."
            }
          ]
        },
        {
          id: 15,
          imageId:2,
          catID: 2,
          text: "Ekonomik durgunluk",
          answers : [
            {
              text : "Ekonomik, sosyal ve çevresel açıdan sürdürülebilir bir büyüme altyapısı oluşturacağız."
            },
            {
              text : "Bilgi ve yeniliğe dayalı, kaynak etkin, yeşil ve rekabetçi bir ekonomi inşa edeceğiz."
            },
            {
              text : "Büyümeyi kredi pompalamasına dayalı yapıdan verimliliğe dayalı bir yapıya kavuşturacağız."
            },
            {
              text : "Rekabet ortamını koruyacak ve güçlendirecek kurumsal ve yasal adımları hayata geçireceğiz."
            },
            {
              text : "Teşvik ve destekleri pazar, finansman ve kurumsal kapasite unsurlarının tümünü dikkate alan bütüncül bir yaklaşımla sunacağız."
            },
            {
              text : "İhracatta rekabetçiliği artırmak amacıyla uygulamaya konulmuş olan Dahilde İşleme Rejiminin işlevselliğini kapsamlı bir değerlendirmeye tabi tutacak ve gerekli iyileştirmeleri hayata geçireceğiz."
            }
          ]
        },

        {
          id: 16,
          imageId:5,
          catID: 5,
          text: "Adalet, hukuk ve yargı",
          answers : [
            {
              text : "Temel hak ve özgürlükleri etnik köken, dil, din, mezhep, cinsiyet, siyasi ve sosyal aidiyet farkı gözetmeksizin tüm insanlar için güvenceye kavuşturacak ve iç hukukumuzu uluslararası standartlarla uyumlu kılacağız."
            },
            {
              text : "Bireylerin düşündüklerini özgürce ifade edebildikleri, ortak çıkarları etrafında birleşebildikleri ve taleplerini barışçıl olarak rahatça ortaya koyabildikleri açık bir toplum yapısı oluşturacağız."
            },
            {
              text : "Kamu görevine alınmada adayların tabi tutulduğu sınavlara ilişkin adalet, dürüstlük, eşitlik, şeffaflık ve denetlenebilirliği sağlayacağız."
            },
            {
              text : "Temel hak ve hürriyetlerin daha güçlü bir şekilde korunması için bireysel başvuru hakkının kapsamını genişleteceğiz."
            }
          ]
        },
        {
          id: 17,
          imageId:1,
          catID: 1,
          text: "Eğitim ve öğretim",
          answers : [
            {
              text : "Fırsat eşitliğini sağlamak ve uzaktan eğitim süreçlerinde yaşanan adaletsizlikleri bertaraf etmek amacıyla özel sektörle birlikte 6-25 yaş arasındaki tüm öğrencilere ve gençlere internete bedava erişim hizmeti sunacağız."
            },
            {
              text : "Müfredatı çağa uygun hale getireceğiz."
            },
            {
              text : "Veri okuma, sosyal medya okur yazarlığı ve güvenli internet kullanımını ilköğretimden itibaren, her yaş grubuna uygun seviyelerde, müfredata koyacağız."
            },
            {
              text : "Liseden mezun olan her gence algoritma ve temel kodlama bilgisine sahip olma imkânı tanıyacağız."
            },
            {
              text : "Evrensel kabiliyetler odaklı eğitim için dijital dönüşümün her aşamasını başarıyla tamamlayacağız."
            }
          ]
        },
        {
          id: 18,
          imageId:5,
          catID: 5,
          text: "Cumhurbaşkanlığı Hükümet sistemi",
          answers : [
            {
              text : "Türkiye’yi “Orta Gelir Tuzağı”ndan kurtarıp “Yüksek Gelirli Ülkeler Grubu”na yükselteceğiz."
            },
            {
              text : "Herkesin insan onuruna yaraşır, iş, gelir ve refah düzeyine kavuşmasını sağlayacağız."
            },
            {
              text : "Fert başına millî geliri iktidarımızın birinci dönemi sonunda yüksek gelirli ülkeler grubu eşiğinin üzerine çıkaracağız."
            },
            {
              text : "Türk lirasına yeniden itibar ve istikrar kazandıracağız."
            },
            {
              text : "Aşırı yoksulluğu sıfırlayacağız."
            },
            {
              text : "Enflasyonu düşük, tek haneli düzeylere indireceğiz."
            },
            {
              text : "Türkiye’ye yeniden “Yatırım Yapılabilir Ülke” statüsü kazandıracağız."
            },
            {
              text : "İşsizlik oranını tek haneli seviyeye düşüreceğiz."
            },
            {
              text : "Dünya pazarlarındaki piyasa payımızı artırarak ekonomimizi sürdürülebilir bir dış denge yapısına kavuşturacağız."
            },
            {
              text : "Ülkemizi gelir dağılımında OECD içinde en kötü sırada olmaktan kurtaracağız."
            }
          ]
        },
        {
          id: 19,
          imageId:4,
          catID: 4,
          text: "Tarım ve üretim",
          answers : [
            {
              text : "Tarım Bakanlığı’nı tarım sektörünün gelişmesine köstek değil destek olan, öncülük eden bir kurum haline getireceğiz."
            },
            {
              text : "Tarım ve tarımsal sanayiye dayalı organize sanayi bölgelerini hızla yaygınlaştıracağız."
            },
            {
              text : "Tarım sektöründe robotik teknolojilerinin geliştirilmesi ve kullanılmasını teşvik edeceğiz."
            },
            {
              text : "Tarım desteklerini üretim yapılan yıl açıklayacak ve aynı yıl içinde ödemelerini gerçekleştireceğiz."
            },
            {
              text : "Başta tohum olmak üzere tarım girdileri ve ürünlerde dışa bağımlılığı azaltacağız."
            },
            {
              text : "Sözleşmeli tarımın yasal altyapısını güçlendirip, üretici-sanayici iş birliğini etkin hale getireceğiz."
            },
            {
              text : "Üretim planlaması yaparak, ürünleri tarlada çürümeye bırakmayacağız."
            }
          ]
        },
        {
          id: 20,
          imageId:2,
          catID: 2,
          text: "Hayat pahalılığı",
          answers : [
            {
              text : "Türkiye’yi “Orta Gelir Tuzağı”ndan kurtarıp “Yüksek Gelirli Ülkeler Grubu”na yükselteceğiz."
            },
            {
              text : "Herkesin insan onuruna yaraşır, iş, gelir ve refah düzeyine kavuşmasını sağlayacağız."
            },
            {
              text : "Fert başına millî geliri iktidarımızın birinci dönemi sonunda yüksek gelirli ülkeler grubu eşiğinin üzerine çıkaracağız."
            },
            {
              text : "Türk lirasına yeniden itibar ve istikrar kazandıracağız."
            },
            {
              text : "Aşırı yoksulluğu sıfırlayacağız."
            },
            {
              text : "Enflasyonu düşük, tek haneli düzeylere indireceğiz."
            },
            {
              text : "Türkiye’ye yeniden “Yatırım Yapılabilir Ülke” statüsü kazandıracağız."
            },
            {
              text : "İşsizlik oranını tek haneli seviyeye düşüreceğiz."
            },
            {
              text : "Dünya pazarlarındaki piyasa payımızı artırarak ekonomimizi sürdürülebilir bir dış denge yapısına kavuşturacağız."
            },
            {
              text : "Ülkemizi gelir dağılımında OECD içinde en kötü sırada olmaktan kurtaracağız."
            }
          ]
        },
        {
          id: 21,
          imageId:5,
          catID: 5,
          text: "Denge ve denetleme ve kuvvetler ayrılığı",
          answers : [
            {
              text : "Katılımcı, çoğulcu ve şeffaf bir müzakere süreci esas alacağı Muhalefetin kanun yapım süreçlerinde daha etkili olmasını sağlayacağız."
            },
            {
              text : "Kanun teklif ve tasarılarının komisyonlarda görüşülmesi esnasında, kanun teklifiyle veya tasarısıyla ilgili sivil toplumun, meslek kuruluşlarının ve uzmanların görüşlerine başvurulmasını zorunlu kılacağız."
            },
            {
              text : "Meclis’in, hükûmet istikrarını olumsuz etkilememek kaydıyla, millet adına yürütmeden bilgi alabilmesini ve aksaklıklar karşısında hükûmete hesap sorabilmesini sağlayacak araçları artıracağız."
            },
            {
              text : "Cumhurbaşkanlığını sembolik yetkileri olan bir makam olarak düzenleyeceğiz."
            },
            {
              text : "Yürütmeye dair icrai yetkilerin TBMM’ye karşı siyasi sorumluluğu olan başbakan ve bakanlardan müteşekkil Bakanlar Kurulu tarafından kullanılmasını sağlayacağız."
            },
            {
              text : "Kurumları yürütmenin müdahalelerine karşı koruyarak bağımsız karar almalarını sağlayacağız."
            },
            {
              text : "Kurumları yasama ve yargı organlarının denetimiyle şeffaf ve hesap verebilir kılacağız."
            },
            {
              text : "Anayasa Mahkemesi üyelerinin en az yarısının TBMM tarafından nitelikli çoğunlukla seçilmesini sağlayacağız."
            }
          ]
        },
        {
          id: 22,
          imageId:3,
          catID: 3,
          text: "Engelli sorunu",
          answers : [
            {
              text : "Engelli yurttaşlarımızın engellilik seviyesine göre almış olduğu maaşları her kademe için iyileştireceğiz."
            },
            {
              text : "Evde bakım aylığı alanların, genel sağlık sigortası primlerini ödeyeceğiz, varsa geçmişe yönelik borçlarını sileceğiz."
            },
            {
              text : "Engellilerin; konaklama, bakım ve sağlık hizmetlerinden ücretsiz şekilde yararlanabileceği, kısa süreli bakım evleri ve yaşam merkezleri oluşturacağız."
            },
            {
              text : "Atamalarda ve özel sektör denetimlerinde; engelli istihdam kontenjanlarını önceliğimiz haline getireceğiz."
            },
            {
              text : "Engelli yurttaşlarımızın; toplu ulaşım araçlarına, iş yerlerine, kamu binalarına, konutlara ve tüm sosyal alanlara sorunsuz şekilde erişebilmesi için gerekli olan alt yapı çalışmalarının tümünü gerçekleştireceğiz."
            },
            {
              text : "Engelli erişimini sağlayabilmek için; kamuya, özel sektöre ve STK’lara ekonomik destek paketi sağlayacağız."
            },
            {
              text : "Engellilerimizin hem kamuda hem de özel sektörde kolay bir şekilde iş bulmasını sağlamak için beşeri sermayelerini arttırıcı; mesleki eğitim ve sertifika programlarını düzenleyeceğiz."
            },
            {
              text : "Engelli yurttaşlarımızın yasal ve insani hakkı olan çalışma hürriyetini elde etmesi için, kamu ve özel sektörde engelli istihdamına ilişkin belirlenen kontenjanların doldurulmasını sağlayacağız."
            },
            {
              text : "Engellilerin yararına çalışan STK'ları destekleyeceğiz."
            }
          ]
        },
        {
          id: 23,
          imageId:3,
          catID: 3,
          text: "Kadın sorunu (Kadına yönelik şidder ve kadın-erkek eşitliği)",
          answers : [
            {
              text : "Kentsel yenilenme projelerinde kadın ve çocuklar için yaşanabilir alanlar üretimini geliştireceğiz."
            },
            {
              text : "Kadın Dostu Kentler programını yaygınlaştıracağız."
            },
            {
              text : "Kadınların ekonomik hayata adil ve etkin katılımlarını sağlayacağız. "
            },
            {
              text : "Mor Bayrak uygulamasını destekleyeceğiz. "
            },
            {
              text : "Kadına karşı şiddette Tek Kapı Sistemi oluşturacağız."
            },
            {
              text : "Mahallelerde kadın, aile, gençlik ve okuma merkezlerini arttıracağız."
            },
            {
              text : "Kadın ve genç girişimcilere yerel yönetimlerce, mekânsal destekler, girişimcilik ve pazarlama eğitimi, kuluçka merkezi ve hızlandırıcı programlar sağlayacağız."
            }
          ]
        },
        {
          id: 24,
          imageId:7,
          catID: 7,
          text: "İklim krizi ve çevre sorunu",
          answers : [
            {
              text : "Tüm şehirlerde ileri Atıksu Arıtma Tesisleri kuracağız. Su israfını en alt düzeye indirilerek çevre kirliliğini önleyip, şehirlerimize doğrudan kullanılabilir nitelikte su temin edilebilmesini sağlayacağız."
            },
            {
              text : "Katı atıkların kaynağında ayrıştırılmasını sağlayarak toplama ve işleme tesislerini sayıca arttıracağız."
            },
            {
              text : "Yağmur Suyu Hasadı projelerini destekleyeceğiz."
            },
            {
              text : "Evsel ve endüstriyel atık su arıtma tesislerinde oluşan arıtma çamurlarının uygun tekniklerle bertaraf edilmesini sağlayacağız."
            },
            {
              text : "Köy yerleşimlerinde deprem, sel, orman yangını, heyelan vb. risklere ön alıcı nitelikte Kırsal Yenilenme çalışmaları başlatacağız."
            },
            {
              text : "Orman yangınları ile mücadelede Havadan Erken Müdahale ve Kurtarma Milli Filosu’nu kuracağız."
            }
          ]
        },
        {
          id: 25,
          imageId:5,
          catID: 5,
          text: "Liyakat",
          answers : [
            {
              text : "Kurumların üst düzey yönetici kadrolarına atanacaklar için liyakat, başarı ve performans ölçütleri belirleyeceğiz."
            },
            {
              text : "Kurumlara atanacak üyelerde liyakati esas alacağız."
            },
            {
              text : "Liyakati esas alıp kayırmacılığı ortadan kaldırmak için yüksek yargı ve TBMM tarafından yapılacak seçimlerde adayların kamuya açık şekilde mülakata tabi tutulmalarını sağlayacağız."
            }
          ]
        },
        {
          id: 26,
          imageId:3,
          catID: 3,
          text: "Sağlık, aile ve çocuk politikalarını kapsayan sosyal politikalar",
          answers : [
            {
              text : "Yeterli ve kaliteli besin, sağlıklı nesiller yetiştirebilmenin en önemli unsurunu oluşturmaktadır. Özellikle son yıllarda oldukça artış gösteren enflasyon ve sosyoekonomik açıdan kötüye giden olumsuz tablo ailelerimizin yeni doğan bebeklerini yeterli ve iyi bir şekilde besleyememesine sebep olmaktadır. Bu kapsamda ihtiyaç sahibi tüm ailelerimizin yeni doğan bebekleri için başta süt ve bebek maması olmak üzere karşılanması gereken temel ihtiyaçları için 1 yıl boyunca ayni ve nakdi destek sağlayacağız."
            },
            {
              text : "Yoksul ailelerimize kış aylarında ısınma yardımı yapacağız."
            },
            {
              text : "Dar gelirli ailelere ucuz ve düşük kirayla konut temin edeceğiz."
            },
            {
              text : "Çocuk işçiliğine sebep olan ekonomik ve sosyal problemleri ortadan kaldıracağız."
            },
            {
              text : "Çocukların eğitim ve sağlık ihtiyaçlarının karşılanması için farklı kategorilerde verilen tüm sosyal yardımların miktarını arttıracağız."
            },
            {
              text : "Gençler için yeni bir eğitim, sosyal yardımlaşma ve çalışma modeline imkan sağlayacak; yaşlı bakım ve çocuk koruma merkezlerinin bir arada bulunduğu tesisler kuracağız."
            },
            {
              text : "Sokakta yaşayan, kimsesiz tüm çocukları sosyal koruma altına alarak huzurlu ve güvenli bir yaşam sürmelerini sağlayacağız."
            },
            {
              text : "'Aileye dönüş' ve 'koruyucu aile' projelerini destekleyeceğiz."
            }
          ]
        },
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
        }
      ],
      activeScene: 1,
      totalScene: 4,
      datas: [],
      selectedDatas: []
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
      getformRadioDatas: (state) => {
        return state.formRadioDatas;
      }
    },
    mutations: {
      activeSceneIncrease(state, payload) {
        state.activeScene += payload;
      },
      finishForm(state, payload) {
        state.selectedDatas.push(payload.catAll.value);
        let item = state.selectedDatas[0];
        let uniqueitem = [...new Set(item)];
        state.activeScene = "end";
        state.selectedDatas = uniqueitem;
        state.datas = payload;
      }
    }

})

export default createStore;