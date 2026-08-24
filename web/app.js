// Fasl-ı Fuzûlî - Modern Web Uygulaması ve Edebiyat Motoru

const CORPUS = {
  "sair": {
    "ad": "Molla Muhammed bin Süleyman Fuzûlî",
    "unvan": "Şâir-i Âzam, Sultân-ı Şuarâ-yı Aşk, Hekîm-i Şuarâ",
    "dogum": "1483 / Hille - Bağdat",
    "vefat": "1556 / Kerbelâ",
    "muhit": "Bağdat, Hille, Necef, Kerbelâ",
    "diller": [
      "Azerbaycan Türkçesi / Osmanlı Türkçesi",
      "Farsça",
      "Arapça"
    ],
    "poetika": "Şi'r-i bî-ilm esâssız dîvâr olur ve esâssız dîvâr gâyetde bî-i'tibâr olur."
  },
  "gazeller": [
    {
      "id": "beni-candan-usandirdi",
      "baslik": "Beni Candan Usandırdı Cefâdan Yâr Usanmaz mı",
      "vezin": "Mef'ûlü / Mefâ'îlü / Mefâ'îlü / Fâ'ûlün",
      "redif": "...usanmaz mı / ...yanmaz mı",
      "tema": "Aşk, Cefa, Şikâyet, Vefa",
      "beyitler": [
        {
          "no": 1,
          "turkce": "Beni cândan usandırdı cefâdan yâr usanmaz mı / Felekler yandı âhımdan murâdım şem'i yanmaz mı",
          "sadelesmis": "Sevgili bana eziyet ederek canımdan bezdirdi, kendisi cefa etmekten usanmaz mı? Âhımın ateşinden felekler tutuştu da bir tek muradımın mumu yanmaz mı?",
          "sanatlar": [
            "Tezat",
            "Mübalağa",
            "İstifham",
            "Tenasüp"
          ]
        },
        {
          "no": 2,
          "turkce": "Kamu bîmârına cânân devâ-yı derd eder ihsân / Niçin kılmaz bana dermân beni bîmâr sanmaz mı",
          "sadelesmis": "Sevgili bütün hastalarına dertlerinin devasını bağışlar; peki niçin bana bir derman kılmaz, yoksa beni hasta saymaz mı?",
          "sanatlar": [
            "Tenasüp",
            "İstifham",
            "Tezat"
          ]
        },
        {
          "no": 3,
          "turkce": "Şeb-i hicrân yanar cânım döker kan çeşm-i giryânım / Uyârır halkı efgānım karâ bahtım uyanmaz mı",
          "sadelesmis": "Ayrılık gecesinde canım yanar, ağlayan gözlerim kan döker; feryadım cümle âlemi uyandırır da bir tek kara bahtım uyanmaz mı?",
          "sanatlar": [
            "Teşhis",
            "Tezat",
            "Mübalağa"
          ]
        },
        {
          "no": 4,
          "turkce": "Gül-i ruhsârına karşu gözümden kanlu akar su / Habîbim fasl-ı güldür bu akar sular bulanmaz mı",
          "sadelesmis": "Gül yanağına karşı gözümden kanlı yaşlar akar; ey sevgilim, bu mevsim ilkbahardır, gül mevsiminde coşan sular bulanıp kızıl akmaz mı?",
          "sanatlar": [
            "Hüsn-i Ta'lil",
            "Tenasüp",
            "İstifham"
          ]
        },
        {
          "no": 5,
          "turkce": "Değildim ben sana mâil sen ettin aklımı zâil / Bana ta'n eyleyen gāfil seni görgeç utanmaz mı",
          "sadelesmis": "Ben önceden sana meyledip tutkun değildim, aklımı başımdan sen aldın. Beni aşkından ötürü kınayan gafil, seni bir kez görse ayıplamaktan utanmaz mı?",
          "sanatlar": [
            "Tecâhül-i Ârif",
            "İstifham"
          ]
        },
        {
          "no": 6,
          "turkce": "Fuzûlî rind-i şeydâdır hemîşe halka rüsvâdır / Sorun kim bu ne sevdâdır bu sevdâdan usanmaz mı",
          "sadelesmis": "Fuzûlî çılgın bir âşıktır, daima halkın diline düşüp rüsvadır; ona sorun bakalım, bu ne biçim bir sevdadır ve o bu sevdadan hiç usanmaz mı?",
          "sanatlar": [
            "Tecrid",
            "İrade",
            "Hüsn-i Makta"
          ]
        }
      ]
    },
    {
      "id": "oyle-sermestem",
      "baslik": "Öyle Sermestem ki İdrâk Etmezem Dünyâ Nedür",
      "vezin": "Fâ'ilâtün / Fâ'ilâtün / Fâ'ilâtün / Fâ'ilün",
      "redif": "...nedür",
      "tema": "Fenâ, Vahdet-i Vücud, Hayret, İrşad",
      "beyitler": [
        {
          "no": 1,
          "turkce": "Öyle sermestem ki idrâk etmezem dünyâ nedür / Ben kimem sâkî olan kimdür mey ü sahbâ nedür",
          "sadelesmis": "Öyle sarhoş ve kendimden geçmişim ki dünyanın ne olduğunu anlamıyorum; ben kimim, kadehi sunan sâkî kimdir, şarap ve kadeh nedir bilmem!",
          "sanatlar": [
            "Tecâhül-i Ârif",
            "Tenasüp",
            "Tasavvufî Cezbe"
          ]
        },
        {
          "no": 2,
          "turkce": "Gerçi cânândan dil-i şeydâ içün kâm isterem / Sorsa cânân bilmezem kâm-ı dil-i şeydâ nedür",
          "sadelesmis": "Gerçi çılgın gönlüm için sevgiliden bir murat dilerim; fakat sevgili sorsa bu divane gönlün muradı nedir söyleyemem.",
          "sanatlar": [
            "Tezat",
            "İstifham"
          ]
        },
        {
          "no": 3,
          "turkce": "Vasldan çün âkıbet bîm-i zevâl eyler gamı / Gamzesi cevrin heves eyler dil-i bî-kes nedür",
          "sadelesmis": "Kavuşmanın ardından hemen ayrılık korkusu başladığından, yapayalnız gönlüm onun eziyetini ve cefasını arzular.",
          "sanatlar": [
            "Hikemî Tasavvur",
            "Tezat"
          ]
        },
        {
          "no": 4,
          "turkce": "Hikmet-i dünyâ vü mâfîhâ bilen ârif değül / Ârif oldur bilmeye dünyâ vü mâfîhâ nedür",
          "sadelesmis": "Dünyayı ve içindekilerin hikmetini bilip akıl yürüten arif değildir; gerçek arif Hak aşkıyla dünyayı ve içindekileri tamamen unutandır.",
          "sanatlar": [
            "Tezat",
            "Cinas",
            "Hikmet"
          ]
        },
        {
          "no": 5,
          "turkce": "Âh u feryâdın Fuzûlî incidüpdür âlemi / Ger belâ-yı aşk ile hoşnûd isen gavgā nedür",
          "sadelesmis": "Ey Fuzûlî! Âh ve iniltilerin bütün âlemi incitti; madem aşk belasından memnunsun o halde bu gürültü ve kavga nedir?",
          "sanatlar": [
            "Tecrid",
            "İstifham"
          ]
        }
      ]
    },
    {
      "id": "can-verme-gam-i-aska",
      "baslik": "Cân Verme Gam-ı Aşka ki Aşk Âfet-i Cândır",
      "vezin": "Mef'ûlü / Mefâ'îlü / Mefâ'îlü / Fe'ûlün",
      "redif": "...cândır",
      "tema": "Aşkın Yüceliği, Fedakârlık, Münâcât",
      "beyitler": [
        {
          "no": 1,
          "turkce": "Cân verme gam-ı aşka ki aşk âfet-i cândır / Aşk âfet-i cân olduğu meşhûr-ı cihândır",
          "sadelesmis": "Sakın aşkın gamına can verme, çünkü aşk canın felaketidir; aşkın can için bir afet olduğu bütün cihanca bilinmektedir.",
          "sanatlar": [
            "Terdîd",
            "Tenasüp",
            "Cinas-ı Muharref"
          ]
        },
        {
          "no": 2,
          "turkce": "Sûd isteme sevdâ-yı gam-ı aşkda hergiz / Kim hâsıl-ı bu feyz-i ticâret hep ziyândır",
          "sadelesmis": "Aşk gamının pazarında asla kâr ve kazanç arama; zira bu manevi ticaretin bütün zahiri getirisi ziyandan ibarettir.",
          "sanatlar": [
            "Tezat",
            "İstiare"
          ]
        },
        {
          "no": 3,
          "turkce": "Her ebrû-yı ham katline bir hançer-i bürrân / Her zülf-i siyeh kasdına bir ef'î yılandır",
          "sadelesmis": "Sevgilinin her kavisli kaşı senin katlin için keskin bir hançerdir; her siyah zülfü ise senin canını almak için zehirli bir yılandır.",
          "sanatlar": [
            "Teşbih-i Beliğ",
            "Tenasüp"
          ]
        },
        {
          "no": 4,
          "turkce": "Yâ rab belâ-yı aşk ile kıl âşinâ beni / Bir dem belâ-yı aşkdan etme cüdâ beni",
          "sadelesmis": "Ey Rabbim! Beni aşk belasına aşina kıl, onunla hemdem eyle; beni bir an bile aşk belasından ayrı düşürme!",
          "sanatlar": [
            "Münâcât",
            "Niyaz",
            "Dua"
          ]
        },
        {
          "no": 5,
          "turkce": "Az eyleme in'âmını ehl-i kereminden / Yâni ki çok eyle gam ü derd ü belânı",
          "sadelesmis": "Kerem ehli katından lütfunu sakın eksik etme; yani bana olan gamı, derdi ve aşk belasını katbekat artır!",
          "sanatlar": [
            "İrade",
            "Tasavvufî Fedakârlık"
          ]
        }
      ]
    },
    {
      "id": "mende-mecnundan-fuzun",
      "baslik": "Mende Mecnûn'dan Füzûn Âşıklık İsti'dâdı Var",
      "vezin": "Fâ'ilâtün / Fâ'ilâtün / Fâ'ilâtün / Fâ'ilün",
      "redif": "...var",
      "tema": "Aşkta Vefa, Mecnun Karşılaştırması, Fahriye",
      "beyitler": [
        {
          "no": 1,
          "turkce": "Mende Mecnûn'dan füzûn âşıklık isti'dâdı var / Âşık-ı sâdık menem Mecnûn'un ancak adı var",
          "sadelesmis": "Bende Mecnûn'dan kat kat fazla âşıklık kabiliyeti vardır; gerçek ve vefalı âşık benim, Mecnûn'un ise sadece adı kalmıştır!",
          "sanatlar": [
            "Fahriye",
            "Telmih",
            "Tezat"
          ]
        },
        {
          "no": 2,
          "turkce": "Kıl tefâhür kim senün hem var men tek âşıkun / Leylî'nün Mecnûn'u Şîrîn'ün eger Ferhâd'ı var",
          "sadelesmis": "Ey sevgili! Sen de benim gibi bir âşığın olduğu için övün; Leylâ'nın Mecnûn'u, Şîrîn'in Ferhâd'ı varsa senin de ben varım!",
          "sanatlar": [
            "Telmih",
            "Leff ü Neşr",
            "Mütenasip İsimler"
          ]
        },
        {
          "no": 3,
          "turkce": "Ehl-i temkînem meni benzetme ey gül bülbüle / Derde yoh sabrı anun her lâhza min feryâdı var",
          "sadelesmis": "Ey gül! Ben vakarlı, temkin ehli bir âşığım, beni bülbüle benzetme; onun derde sabrı yoktur, her an binlerce feryat koparır.",
          "sanatlar": [
            "Teşhis",
            "Tenasüp",
            "Tezat"
          ]
        },
        {
          "no": 4,
          "turkce": "Ey Fuzûlî aşk men'in kılma nâsıhden kabûl / Akl tedbîridür ol sanma ki bir bünyâdı var",
          "sadelesmis": "Ey Fuzûlî! Aşkı terk etmeni söyleyen nasihatçiyi dinleme; onun söyledikleri aklın tedbiridir, zannetme ki hakikat yolunda bir temeli vardır!",
          "sanatlar": [
            "Hikmet",
            "İrşad"
          ]
        }
      ]
    },
    {
      "id": "dost-bi-vefa",
      "baslik": "Dost Bî-Vefâ Felek Bî-Rahm Devrân Bî-Sükûn",
      "vezin": "Fâ'ilâtün / Fâ'ilâtün / Fâ'ilâtün / Fâ'ilün",
      "redif": "...zebûn / ...sükûn",
      "tema": "Felekten Şikâyet, Yalnızlık, Çaresizlik",
      "beyitler": [
        {
          "no": 1,
          "turkce": "Dost bî-vefâ felek bî-rahm devrân bî-sükûn / Dert çoh hem-dert yoh düşmen kavî tâli' zebûn",
          "sadelesmis": "Dost vefasız, felek merhametsiz, dünya ise huzursuz ve kararsız. Dert çok, dert ortağı yok; düşman güçlü, talihim ise âciz ve yeniktir!",
          "sanatlar": [
            "Tersî",
            "Tezat",
            "Siyâkatü'l-A'dâd",
            "İ'caz"
          ]
        },
        {
          "no": 2,
          "turkce": "Ey Fuzûlî dehr bünyâdın harâb etmiş meğer / Kimsenün görmez nazar kıldukça bir şâd olduğun",
          "sadelesmis": "Ey Fuzûlî! Galiba bu feleğin temeli baştan haraptır ki, baktıkça kimsenin bir an olsun mutlu olduğunu göremezsin!",
          "sanatlar": [
            "Hikmet",
            "Şikâyet",
            "Tecrid"
          ]
        }
      ]
    },
    {
      "id": "ask-derdiyle-hosem",
      "baslik": "Aşk Derdiyle Hoşem El Çek İlâcımdan Tabîb",
      "vezin": "Fâ'ilâtün / Fâ'ilâtün / Fâ'ilâtün / Fâ'ilün",
      "redif": "...dermândadır / ...ihsândır",
      "tema": "Aşk Derdi, Rıza Makamı, Tabib Hicvi",
      "beyitler": [
        {
          "no": 1,
          "turkce": "Aşk derdiyle hoşem el çek ilâcımdan tabîb / Kılma dermân kim helâkim zehri dermândadır",
          "sadelesmis": "Ben aşk derdinden son derece memnunum, ey tabip bana ilaç vermekten el çek! Bana derman sunma ki benim helak olmam asıl o dermanın zehrindedir!",
          "sanatlar": [
            "Tezat",
            "Paradoks",
            "Hekim Hitabı"
          ]
        },
        {
          "no": 2,
          "turkce": "Yârdan cevr ü cefâ gelmez kamu lutf u kerem / Aşka düşvâr olmasa her cevr bir ihsândır",
          "sadelesmis": "Sevgiliden cefa ve eziyet gelmez, onun her yaptığı lütuftur; aşk yolunda zorluk olmasaydı onun her cefası başlı başına bir ihsandı.",
          "sanatlar": [
            "Tasavvufî Aşk",
            "Tezat"
          ]
        }
      ]
    }
  ],
  "su_kasidesi": {
    "baslik": "Su Kasîdesi (Kasîde der-Na't-ı Hazret-i Nebevî)",
    "vezin": "Fâ'ilâtün / Fâ'ilâtün / Fâ'ilâtün / Fâ'ilün",
    "redif": "su",
    "toplam_beyit": 32,
    "aciklama": "Klasik Türk edebiyatında Hz. Peygamber (s.a.v.) sevgisini dile getiren en büyük na't şaheseridir.",
    "beyitler": [
      {
        "no": 1,
        "metin": "Sâçma ey göz eşkden gönlümdeki odlara su / Kim bu denlü tutuşan odlara kılmaz fâide su",
        "anlam": "Ey gözüm! Gönlümdeki aşk ateşlerine gözyaşından su saçma; çünkü bu derece alevlenip tutuşmuş yangınlara su fayda vermez!",
        "sanatlar": [
          "Tezat (Od / Su)",
          "Mübalağa",
          "Tenasüp"
        ]
      },
      {
        "no": 2,
        "metin": "Âb-gûndur günbed-i devvâr rengi bilmezem / Yâ muhît olmuş gözümden günbed-i devvâra su",
        "anlam": "Dönen feleğin rengi kendiliğinden mi mavidir, yoksa gözümden dökülen yaşlar bütün gök kubbeyi mi kaplamıştır, bilemiyorum!",
        "sanatlar": [
          "Tecâhül-i Ârif",
          "Hüsn-i Ta'lil"
        ]
      },
      {
        "no": 3,
        "metin": "Zevk-ı tîğundan aceb yoh olsa gönlüm çâk çâk / Kim mürûr ile bırağur rahneler dîvâra su",
        "anlam": "Kılıca benzeyen gamzenin zevkiyle gönlüm parça parça olsa buna şaşılmaz; zira su da zamanla akıp geçtikçe duvarda çatlaklar açar.",
        "sanatlar": [
          "Temsilî Teşbih"
        ]
      },
      {
        "no": 4,
        "metin": "Vehm ilen söyler dil-i mecrûh peykânun sözin / İhtiyât ile içer her kimde kim var yara su",
        "anlam": "Yaralı gönül, senin ok gibi kirpiklerinin sözünü korkuyla söyler; nitekim vücudunda derin bir yara olan kimse suyu büyük bir ihtiyatla içer.",
        "sanatlar": [
          "İrsâl-i Mesel",
          "Tıbbi Teşbih"
        ]
      },
      {
        "no": 5,
        "metin": "Gül-i ruhsârına karşu gözümden kanlu akar su / Habîbim fasl-ı güldür bu akar sular bulanmaz mı",
        "anlam": "Gül yanağına karşı gözümden kanlı yaşlar akar; sevgilim bu mevsim ilkbahardır, gül mevsiminde coşan sular bulanık ve kızıl akmaz mı?",
        "sanatlar": [
          "Hüsn-i Ta'lil",
          "İstifham"
        ]
      },
      {
        "no": 6,
        "metin": "Eyle bağbân bağ-ı dehrin kadrini deryâ kadar / Gerçi kim bir berk-i gül içün döker her yâra su",
        "anlam": "Bahçıvan dünya bahçesini denizler kadar yüceltsin; gerçi o bahçıvan bir tek gül yaprağı için her bir yarık ve çukura sular akıtır.",
        "sanatlar": [
          "Tenasüp",
          "İstiare"
        ]
      },
      {
        "no": 7,
        "metin": "Hâk-i pâyine yetem dir ömrlerdir muttasıl / Başını daşdan daşa urup gezer âvâre su",
        "anlam": "Su, senin ayağının toprağına ulaşayım diyerek asırlardır durmaksızın başını taştan taşa vurarak avare bir halde akıp gezmektedir.",
        "sanatlar": [
          "Hüsn-i Ta'lil",
          "Teşhis"
        ]
      },
      {
        "no": 8,
        "metin": "Zerre zerre hâk-i dergâhına ister yetmeğe / Dönemez kılmazsa lutfun mevc-i deryâbâra su",
        "anlam": "Su, zerre zerre senin eşiğinin toprağına kavuşmak ister; fakat senin lütfun denizlerin dalgalarını su haline getirip imdat etmezse buna güç yetiremez.",
        "sanatlar": [
          "Tenasüp"
        ]
      },
      {
        "no": 9,
        "metin": "Gılmân-ı huld âb-ı kevser içmeğe teşne kılır / Lutfun eylerse füyûz-ı meşreb-i ezhâra su",
        "anlam": "Senin lütfun çiçeklerin sulandığı pınarlara bereket verirse, cennet gılmanları bile Kevser suyunu içmek yerine o çiçeklerin suyuna susarlar.",
        "sanatlar": [
          "Mübalağa",
          "Tenasüp"
        ]
      },
      {
        "no": 10,
        "metin": "Rûz-ı mahşer hâr-ı hasret çekmesün dîdârına / Ver şefâat müjdesin bu çeşm-i hûn-efşâna su",
        "anlam": "Mahşer gününde senin cemâline hasret dikeni batmasın; bu kan saçan ağlayıcı gözüme şefaat müjdeni bir su gibi bağışla!",
        "sanatlar": [
          "İstiare",
          "Dua"
        ]
      },
      {
        "no": 11,
        "metin": "Meyl eder dîdâr-ı pâk-i Ahmed-i Muhtâr'a kim / Eylemiş mir'ât-ı zâtın zîb-i hüsn-i kâra su",
        "anlam": "Herkes Ahmed-i Muhtâr'ın temiz cemâline meyleder; zira su, onun nurlu zatının aynasını kâinatın güzellik süsü kılmıştır.",
        "sanatlar": [
          "Tenasüp",
          "Medih"
        ]
      },
      {
        "no": 12,
        "metin": "Mazhar-ı feyz-i Hudâ'dır menba-ı cûd u kerem / Menzil-i maksûda yetmiş katre-i pür-bâra su",
        "anlam": "O Allah'ın feyizlerinin tecelligâhı, cömertlik pınarıdır; onun dergâhına varan her bereketli damla murat menziline ermiş bir sudur.",
        "sanatlar": [
          "Teşbih",
          "Tenasüp"
        ]
      },
      {
        "no": 13,
        "metin": "Kılmağ içün taze canlar ehl-i İslâm'a müdâm / Mu'cizâtın bağbânı döktü bî-hemtâya su",
        "anlam": "İslâm ehline daima taze canlar bağışlamak için, onun mucizeler bahçıvanı eşi benzeri olmayan pınarlara can suyu dökmüştür.",
        "sanatlar": [
          "İstiare"
        ]
      },
      {
        "no": 14,
        "metin": "Hırmen-i gerdûnu yakdı âh-ı âteş-bâr-ı halk / Kıl terahhum dök bu yanmış hırmen-i gerdûna su",
        "anlam": "İnsanların ateş saçan âhları gökyüzünün harmanını yaktı; merhamet eyle ve bu yanmış felek harmanına rahmet suyu dök!",
        "sanatlar": [
          "Tezat",
          "Mübalağa"
        ]
      },
      {
        "no": 15,
        "metin": "Tîynet-i pâkin kılan Hak verdi hüsn-i hulk sana / Kıldı pîrâye-i zât-ı bî-bedel güftâra su",
        "anlam": "Temiz mayanı yaratan Yüce Hak sana en güzel ahlakı verdi; senin eşsiz sözlerine suyu süs ve paha biçilmez ziynet kıldı.",
        "sanatlar": [
          "Medih"
        ]
      },
      {
        "no": 16,
        "metin": "Mu'ciz-i peygamberî çün zahir oldu dehrde / Eyledi parmaklarından fışkıran enhâra su",
        "anlam": "Peygamberlik mucizesi dünyada aşikâr olduğunda, susuz çölde mübarek parmaklarından fışkıran ırmaklara sular teslim ve hayran oldu.",
        "sanatlar": [
          "Telmih"
        ]
      },
      {
        "no": 17,
        "metin": "Rıf'at-i kadrin bilip ta'zîm kıldı kâinât / Ebr-i ihsânından oldu bahr ile berhâra su",
        "anlam": "Bütün kâinat senin kadir ve kıymetinin yüceliğini bilip sana tazim etti; senin ihsan bulutundan denizlere ve karalara hayat suyu yağdı.",
        "sanatlar": [
          "Tezat",
          "Tenasüp"
        ]
      },
      {
        "no": 18,
        "metin": "Gülşen-i kûyunda bülbül nağme-sâz-ı aşk olur / Kim verir ol ravza-i rıdvâna feyz-i câra su",
        "anlam": "Senin mukaddes yurdunun gül bahçesinde bülbül aşk ezgileri söyler; çünkü o cennet bahçesine akan feyizli çeşmeler hayat suyu verir.",
        "sanatlar": [
          "Tenasüp",
          "İstiare"
        ]
      },
      {
        "no": 19,
        "metin": "Lutfunun deryâsı mevc-â-mevc urur her rûzgâr / Tâ ebed bulmaz nihâyet bu tükenmez kâra su",
        "anlam": "Senin lütuf denizin her devirde dalga dalga coşar; bu sonsuz rahmet akışına ve tükenmez ihsana ebediyen son bulunmaz.",
        "sanatlar": [
          "Mübalağa"
        ]
      },
      {
        "no": 20,
        "metin": "Mihr-i zâtın berk vurur zerrât-ı kevne her seher / Kim verir her zerre-i nâçîze envâra su",
        "anlam": "Senin zatının güneşi her seher varlığın bütün zerrelerine ışık saçar; o güneş ki her değersiz zerrenin nuruna berraklık ve su bağışlar.",
        "sanatlar": [
          "Teşbih",
          "Tenasüp"
        ]
      },
      {
        "no": 21,
        "metin": "Dergeh-i lutfun meğer ab-ı hayât-ı cândır / Kim bulur her mürde-dil ol dergeh-i gülzâra su",
        "anlam": "Senin lütuf dergâhın meğer canlar canı Âb-ı Hayat imiş; nitekim her ölü gönül o gül bahçesi dergâhta dirilik suyunu bulur.",
        "sanatlar": [
          "Teşbih-i Beliğ"
        ]
      },
      {
        "no": 22,
        "metin": "Tab'-ı mevzûnum kılur medhinde rengîn şi'rler / Kim döker lafz-ı dürer-bârımla bu eş'âra su",
        "anlam": "Şiire kabiliyetli tabiatım senin övgünde renkli ve taze şiirler söyler; zira inci saçan sözlerimle bu şiirlere letafet ve su dökülmektedir.",
        "sanatlar": [
          "Fahriye",
          "İstiare"
        ]
      },
      {
        "no": 23,
        "metin": "Nâme-i a'mâlimi yusun zünûbumdan müdâm / Bahr-i lutfundan irişen katre-i sehhâra su",
        "anlam": "Senin lütuf denizinden erişen o efsunlu rahmet damlası, günahlarla kirlenmiş amel defterimi yıkayıp arındırsın!",
        "sanatlar": [
          "Niyaz",
          "Tenasüp"
        ]
      },
      {
        "no": 24,
        "metin": "Yâ Resûlallâh şefâat kıl Fuzûlî bî-kese / Kim döker pür-cür'a-i derd ile çeşm-i zâra su",
        "anlam": "Ey Allah'ın Resûlü! Kimsesiz Fuzûlî'ye şefaat eyle; zira o dert kadehiyle ağlayan gözlerine kanlı sular dökmektedir.",
        "sanatlar": [
          "Nidâ",
          "Tecrid"
        ]
      },
      {
        "no": 25,
        "metin": "Ol günehkârem ki yokdur zerrece yüz aklığım / Dökemez cürmüm oduna ebr-i istigfâra su",
        "anlam": "Ben öyle bir günahkârım ki zerrece yüz aklığım yoktur; günahlarımın ateşine istiğfar bulutu dahi su serpmeye kifayet etmez.",
        "sanatlar": [
          "Tezat",
          "Teşbih"
        ]
      },
      {
        "no": 26,
        "metin": "Ümmetindir gerçi kim her fısk u ısyân eyleyen / Lîk lutfun eyleye her ehl-i istigfâra su",
        "anlam": "Gerçi günah ve isyan işleyen herkes senin ümmetindir; lakin senin lütfun tövbe ve istiğfar edenlerin imdadına su gibi yetişecektir.",
        "sanatlar": [
          "Hikmet"
        ]
      },
      {
        "no": 27,
        "metin": "Göz diküp lutfuna bekler lutf-ı âmından meded / Tâ kıla nâr-ı cehennemden amân ebrâra su",
        "anlam": "Gözünü senin lütfuna dikmiş merhamet bekler; ta ki o rahmet suyu iyileri cehennem ateşinden korusun.",
        "sanatlar": [
          "Tezat"
        ]
      },
      {
        "no": 28,
        "metin": "Çeşm-i ümmîdim dikilmiş ravza-i dîdârına / Dilerem kim vire ol gülzâr-ı pür-esrâra su",
        "anlam": "Ümit gözüm senin cemâlinin cennet bahçesine dikilmiştir; dilerim ki Yüce Allah o sırlar dolu gül bahçesine sonsuz rahmet suyu versin.",
        "sanatlar": [
          "İstiare"
        ]
      },
      {
        "no": 29,
        "metin": "Katre-i hâk-i derinden eyleyen kesb-i şeref / Hâsıl eyler lü'lü-i lâlâ gibi envâra su",
        "anlam": "Senin kapının toprağının bir damlasından şeref kazanan kimse, parıldayan parlak bir inci gibi nurlara gark olmuş bir su elde eder.",
        "sanatlar": [
          "Teşbih"
        ]
      },
      {
        "no": 30,
        "metin": "Habbezâ ol rûz kim rûh-ı revânım terk ede / Koma gark-ı nâr-ı hasret eyle bu bî-mâra su",
        "anlam": "Ruhum beden kafesini terk ettiği o son nefes gününde bu dertli hastayı hasret ateşinde boğulmuş bırakma, ona şefaat suyunu eriştir!",
        "sanatlar": [
          "Hüsn-i Talep"
        ]
      },
      {
        "no": 31,
        "metin": "Dest-bûsi ârzûsiyle ger ölsem dostlar / Kûze eylen toprağım sunun anunla yâra su",
        "anlam": "Ey dostlar! Eğer onun elini öpme hasretiyle ölürsem; mezarımın toprağından bir testi yapın ve o testiyle o sevgiliye su sunun!",
        "sanatlar": [
          "Hüsn-i Ta'lil",
          "Teşbih",
          "İstiare",
          "Ebedi Vefa Mazmunu"
        ]
      },
      {
        "no": 32,
        "metin": "Hâb-ı gafletden Fuzûlî çün uyandı âkıbet / Tâ ki kılur eşk-i hasretle bu pür-efkâra su",
        "anlam": "Fuzûlî gaflet uykusundan nihayet uyandığında; hasret gözyaşlarıyla bu keder ve tefekkür dolu gönlüne şefaat suyu döker.",
        "sanatlar": [
          "Hüsn-i Makta",
          "Tecrid"
        ]
      }
    ]
  },
  "mesneviler": [
    {
      "id": "leyla-vu-mecnun",
      "baslik": "Leylâ vü Mecnûn Mesnevîsi",
      "vezin": "Mef'ûlü / Mefâ'îlün / Fe'ûlün",
      "toplam_beyit": 3096,
      "konu": "Beşerî aşktan İlâhî Aşka ve Fenâ makamına yükselişin mistik lirik destanı.",
      "pasajlar": [
        {
          "baslik": "Mecnûn'un Kâbe'deki Münâcâtı",
          "metin": "Yâ Rab belâ-yı aşk ile kıl âşinâ beni / Bir dem belâ-yı aşkdan etme cüdâ beni\nAz eyleme in'âmını ehl-i kereminden / Yâni ki çok eyle gam ü derd ü belânı\nGittikçe hüsnün eyle ziyâde nigârımın / Geldikçe derdine kıl ziyâde devâmımı",
          "anlam": "Ey Rabbim! Beni aşk belasına aşina eyle, bir an bile aşk derdinden ayrı düşürme! Bana olan aşk derdini artır, sevgilimin güzelliğini çoğalt, benim de o derde tahammülümü ve vefamı sonsuz kıl!"
        },
        {
          "baslik": "Mecnûn'un Mumla Söyleşisi",
          "metin": "Ey şem' senünle menem hemdem / İkimiz de yanaruz dem-be-dem\nSen başından dökersün yaşını / Ben sînemden çıkaruram âteşimi\nFarkımız oldur ki ey nûr-ı safâ / Sen giceler yanarsun ben subh u mesâ",
          "anlam": "Ey mum! Seninle dert ortağıyız; ikimiz de durmaksızın yanıyoruz. Sen başından yaş dökersin, ben bağrımdan ateş püskürürüm. Tek farkımız; sen sadece geceleri yanarsın, ben ise hem sabah hem akşam yanmaktayım!"
        },
        {
          "baslik": "Leylâ'nın Çöle Gelişi ve Fenâ Makamı",
          "metin": "Leylâ: 'Ben Leylâ'yım, senin için geldim!'\nMecnûn: 'Ger sen Leylî isen bendeki kimdir? Bendeki Leylâ bana yeter; fâni surete ve cisme artık mecalim yoktur!'",
          "anlam": "Mecnûn suret âlemini aşmış, zihnindeki ve kalbindeki mutlak hakikate ermiştir."
        }
      ]
    },
    {
      "id": "beng-u-bade",
      "baslik": "Beng ü Bâde (Afyon ile Şarap Münâzarası)",
      "vezin": "Remel (Fâ'ilâtün / Fâ'ilâtün / Fâ'ilün)",
      "toplam_beyit": 444,
      "konu": "Şah İsmail'e ithaf edilen, Bâde (Şarap) ile Beng (Afyon) arasındaki alegorik egemenlik münazarası ve hiciv.",
      "pasajlar": [
        {
          "baslik": "Bâde'nin Kibri ve Meclis Hükümdarlığı",
          "metin": "Bâde dir kim menem safâ-yı derûn / Cümle âlemde hükmüm eyler füsûn\nCâm-ı Cem'den nişânı ben verürem / Gamlı kalblere ferah getürürem",
          "anlam": "Şarap der ki: Gönlün safası benim; bütün âlemde hükmüm büyüleyicidir. Cemşîd'in kadehinden nişanı ben veririm, dertli kalplere ferahlık getiririm."
        }
      ]
    }
  ],
  "mensur_eserler": [
    {
      "id": "sikayetname",
      "baslik": "Şikâyetnâme (Nişancı Celâlzâde Mustafa Çelebi'ye Mektup)",
      "tur": "Mensur Mektup & Sosyal Hiciv",
      "tarih": "1534 civarı",
      "ozet": "Fuzûlî'ye bağlanan 9 akçelik vakıf zevâidi maaşını bürokratik engeller yüzünden alamaması üzerine yazdığı Doğu edebiyatının en meşhur hiciv ve nesir şaheseridir.",
      "metin": "Ba'de't-tahyiyyet ve't-teslîm... Evkāf ta'ayyün eyleyen gürûh-ı nâ-kesânın yanına vardım:\n\nSelâm verdim rüşvet değildür deyu almadılar.\nHüküm gösterdim fâidesüzdür deyu mültefit olmadılar.\n\nEğerçi zâhirde sûret-i itâ'at gösterdiler, ammâ zebân-ı hâl ile cemî'-i su'âlime cevâb-ı bârid verdiler.\n\nDedim: 'Yâ eyyühe'l-ashâb! Bu ne mu'âmele-i nâ-meşrû'dur?'\nDediler: 'Bizim mu'âdeletimiz böyledir.'\n\nDedim: 'Benim berâtımın mazmûnuna amel etmek vâcib değil midir?'\nDediler: 'Ol zevâiddir, husûlü müte'azzirdir.'\n\nDedim: 'Vakf malı mültefit-i zâyi' olmak revâ mıdır?'\nDediler: 'Zemânede hak budur ki, hıfz-ı emânet eden bî-kâm ola.'\n\nDedim: 'Bu hüccet-i şer'îye i'tibâr yok mudur?'\nDediler: 'Bizim meclisimizde fuzûlî sözün i'tibârı yokdur!'\n\nHâsılı gördüm ki, su'âlime cevâbdan gayrı nesne vermezler ve bu berât ile hâcetim revâ görmezler. Nâ-çâr terk-i cidâl kıldım ve me'yûs ü mahzûn kûşe-i firâk u fakre çekildim..."
    },
    {
      "id": "hadikatus-sueda",
      "baslik": "Hadîkatü's-Süedâ (Saadete Ermişlerin Bahçesi)",
      "tur": "Maktel-i Hüseyin & Mensur-Manzum Tarih",
      "ozet": "Peygamberlerin çileleri ve Kerbelâ Vakası'nı anlatan, derin bir hüzün ve lirik şaheser kabul edilen maktel.",
      "metin": "Ey bâd-ı sabâ Kerbelâ deştine varırsan, ol mazlûmlar ser-çeşmesine selâm kıl...\nMâh-ı Muharrem oldu döküldü yine kanlar / Gark oldu kızıla boyandı şühedâlar\nKerbelâ deştine düştü âl-i evlâd-ı Resûl / Ağlasun bu derde yer ü gök ile ins ü melek"
    },
    {
      "id": "rind-u-zahid",
      "baslik": "Rind ü Zâhid",
      "tur": "Alegorik Münâzara (Farsça Mensur)",
      "ozet": "Zâhid baba ile rind oğul arasındaki şeriat, akıl, tasavvuf ve ilahi aşk tartışması.",
      "metin": "Zâhid zahiri ibadetleri ve cennet menfaatini savunurken; Rind içtenliği, kalbi sevgiyi, ihlası ve şekilcilikten uzak hakiki ubudiyeti temsil eder."
    },
    {
      "id": "dibace",
      "baslik": "Türkçe Dîvân Dîbâcesi (Mukaddime)",
      "tur": "Mensur Mukaddime / Poetika",
      "ozet": "Fuzûlî'nin şiir anlayışını, ilim ile şiir arasındaki zorunlu dengeyi ve mahlas seçiminin gerekçesini anlattığı manifesto.",
      "metin": "Şi'r-i bî-ilm esâssız dîvâr olur ve esâssız dîvâr gâyetde bî-i'tibâr olur... Mahlas seçiminde ise 'Fuzûlî' mahlasını seçtim; zira bu mahlas hem lüzumsuz/hadsiz manasına gelir tevazu gösterir, hem de fazilet ve ilim manasına gelen 'fazl' kökünden türer. Kimse bu mahlası gasbedemez!"
    }
  ],
  "rubailer_ve_kitalar": [
    {
      "no": 1,
      "tur": "Kıt'a",
      "vezin": "Mef'ûlü / Mefâ'îlü / Fe'ûlün",
      "metin": "Cehl ile kimesne bulmadı kâm / İlm iledir rif'at-i makām\nGer zerre kadar olursa ilmin / Âlemde seni kılur muazzam",
      "anlam": "Cehaletle hiçbir kimse muradına eremedi; mevkilerin en yücesi ancak ilim iledir. Zerre kadar da olsa ilmin varsa, o ilim seni bütün cihanda yüce kılar."
    },
    {
      "no": 2,
      "tur": "Rübâi",
      "vezin": "Mef'ûlü / Mefâ'îlün / Fe'ûlün",
      "metin": "Dünyâ talebiyle ömrün etme zâyi' / Bir zevk içün eyleme cihânı tâyi'\nKânî' olasın dâima her nâzile kim / Rızkı vericidir ol Cenâb-ı Sâni'",
      "anlam": "Dünya malı peşinde ömrünü heba etme; fâni bir lezzet için dünyaya boyun eğme. Başına gelen her hâle kanaat eyle; çünkü bütün yaratılmışların rızkını veren O Yüce Yaratıcı'dır."
    },
    {
      "no": 3,
      "tur": "Rübâi",
      "vezin": "Mef'ûlü / Mefâ'îlü / Fe'ûlün",
      "metin": "Bî-vefâ dünyâdan umma sen vefâ / Kimseye kılmadı bu dehr-i cefâ\nBalını yiyen içer ağu hemîn / Zehrine sabr eyle ger dersen safâ",
      "anlam": "Vefasız dünyadan asla vefa bekleme; bu cefa dünyası bugüne dek kime vefa gösterdi ki? Onun balını tadan mutlaka zehrini de içer; safa sürmek istersen önce zehrine sabretmeyi öğrenmelisin."
    }
  ],
  "hikmetli_sozler": [
    {
      "soz": "Şi'r-i bî-ilm esâssız dîvâr olur ve esâssız dîvâr gâyetde bî-i'tibâr olur.",
      "kaynak": "Türkçe Dîvân Dîbâcesi",
      "anlam": "İlimsiz şiir temelsiz duvara benzer; temelsiz duvar ise nihayetinde bütünüyle itibarsız ve yıkılmaya mahkûmdur."
    },
    {
      "soz": "Selâm verdim rüşvet değildür deyu almadılar. Hüküm gösterdim fâidesüzdür deyu mültefit olmadılar.",
      "kaynak": "Şikâyetnâme",
      "anlam": "Selam verdim rüşvet değildir diye almadılar. Padişah fermanını gösterdim işe yaramaz diye yüzüme bakmadılar."
    },
    {
      "soz": "Yâ Rab belâ-yı aşk ile kıl âşinâ beni / Bir dem belâ-yı aşkdan etme cüdâ beni",
      "kaynak": "Leylâ vü Mecnûn Mesnevîsi",
      "anlam": "Ey Rabbim! Beni aşk belasına aşina eyle, beni bir an bile aşk derdinden ayrı düşürme!"
    },
    {
      "soz": "Cehl ile kimesne bulmadı kâm / İlm iledir rif'at-i makām",
      "kaynak": "Kıt'alar",
      "anlam": "Cehaletle hiç kimse muradına eremedi; mevkilerin en yücesi ancak ilim iledir."
    },
    {
      "soz": "Dest-bûsi ârzûsiyle ger ölsem dostlar / Kûze eylen toprağım sunun anunla yâra su",
      "kaynak": "Su Kasîdesi (31. Beyit)",
      "anlam": "Ey dostlar! Eğer onun elini öpme hasretiyle ölürsem; mezarımın toprağından bir testi yapın ve o testiyle o sevgiliye su sunun!"
    },
    {
      "soz": "Cânı kim cânânı içün sevse cânânın sever / Cânı içün kim ki cânânın sever cânın sever",
      "kaynak": "Türkçe Dîvân Gazelleri",
      "anlam": "Kim canını sevgilisi için severse sevgilisini sevmiş olur; kim sevgilisini kendi canının menfaati için severse sadece kendi nefsini sevmiş olur!"
    }
  ],
  "lugat": {
    "Âb-ı Hayât": "Dirilik ve ölümsüzlük suyu. Tasavvufta İlahi Aşk, marifetullah ve Hz. Peygamber'in feyzi.",
    "Âgâh": "Uyanık, haberdar, hakikatin farkında olan basiret sahibi.",
    "Ahlat-ı Erbaa": "Klasik tıpta dört temel unsur: Kan (dem), balgam, sarı safra, kara safra (sevda).",
    "Arak-rîz": "Ter döken, terleten; utanma veya vecd hali.",
    "Bâde / Mey": "Şarap. Tasavvufta kesafetten arındıran ilahi aşk sarhoşluğu, cezbe ve vecd hali.",
    "Belâ": "İmtihan, çile, aşk ızdırabı. Âşığın ruhunu olgunlaştıran manevi ateş.",
    "Bezmi Elest": "Ruhlar meclisi ('Elestü bi-Rabbiküm' hitabına 'Kālû Belâ' denilen ezel bezmi).",
    "Câm": "Kadeh, kupa. Tasavvufta kâmil mürşidin kalbi veya âşığın gönlü.",
    "Cüdâ": "Ayrı, uzak, ayrılmış.",
    "Çâk": "Yarık, yırtık. Aşk ateşiyle göğsün yarılması (çâk-i girîbân).",
    "Derd": "Hastalık, acı. Fuzûlî'de dert aranan ve sevilendir; aşk derdi ruhun şifasıdır.",
    "Dîbâce": "Önsöz, mukaddime. Eserin telif sebebini ve sanat felsefesini açıklar.",
    "Dildâr / Dilber": "Gönlü alan, sevgili. Hakiki manada Cenâb-ı Hak veya O'nun tecellisi.",
    "Eşk": "Gözyaşı. Genellikle kanlı (hûn-efşân) olarak tasvir edilir.",
    "Fenâ / Fenâfillâh": "Kulun kendi benliğinden geçip Hakk'ın varlığında yok olması.",
    "Gamze": "Yan bakış, sevgilinin göz süzüşü. Şiirde âşığın kalbini vuran ok veya hançer.",
    "Gavvâs": "Dalgıç. Fikir denizine dalan derin mütefekkir.",
    "Giryân": "Ağlayan, gözyaşı döken.",
    "Harâbât": "Meyhane, harabeler. Tasavvufta dünya süsünden soyunmuş tevazu ehlinin dergâhı.",
    "Hem-dem": "Can ciğer dost, aynı nefesi paylaşan arkadaş.",
    "Hicrân": "Ayrılık acısı. Vuslattan daha yüce görülen aşkı diri tutan hâl.",
    "Hüsn": "Güzellik. Mutlak Cemâl'in dünyadaki aynası.",
    "Hüsn-i Ta'lil": "Bir doğa olayını veya durumu şairane ve güzel hayali bir sebebe bağlama sanatı.",
    "Kûy": "Sevgilinin oturduğu mahalle, semt veya dergâh.",
    "Kûze": "Testi, çömlek. Âşığın toprağından yapılan su kabı.",
    "Künc": "Köşe, kuytu yer (örn. künc-i gam: dert ve hüzün köşesi).",
    "Lâle-gûn": "Lale renkli, al, kan kırmızı.",
    "Maktel": "Şehadet ve katil yeri; Kerbelâ faciasını anlatan edebi tür.",
    "Mazmun": "Edebi kavram, kalıplaşmış mecaz ve semboller.",
    "Mecnûn": "Çılgın, deli, aşk divânesi; Leylâ ile Mecnûn'un kahramanı Kays.",
    "Mihr": "Güneş; aynı zamanda sevgi, muhabbet ve şefkat.",
    "Mu'cize": "Peygamberlerin Allah vergisi olağanüstü hâlleri.",
    "Münâcât": "Kulun Allah'a yalvarışını, niyazını dile getiren dua şiiri.",
    "Na't": "Hz. Peygamber'i (s.a.v.) övmek ve şefaat dilemek için yazılan kaside ve şiirler.",
    "Pervâne": "Mumun etrafında dönüp kendini ateşe atan kelebek. Âşığın mutlak fedakârlığı.",
    "Peykân": "Okun sivri temreni (ucu). Sevgilinin kirpikleri.",
    "Rind": "Kalender, dünya mülküne ve şekilciliğe aldırmayan hakiki gönül ehli.",
    "Rûz-ı Cezâ / Mahşer": "Kıyamet günü, hesap günü.",
    "Rüsvâ": "Rezil, halkın diline düşmüş âşık.",
    "Sâkî": "Kadehlere içki sunan. Tasavvufta feyiz ve marifet sunan kâmil mürşit.",
    "Sehl-i Mümteni": "Kolay gibi görünen fakat benzeri söylenemeyecek kadar derin ve zor sanat üslûbu.",
    "Sermest": "Başından sarhoş, kendinden geçmiş, cezbe ehli.",
    "Şeb-i Hicrân": "Ayrılık gecesi. Upuzun, karanlık ve çile dolu gece.",
    "Şem'": "Mum, kandil. Sevgilinin nurlu yüzü veya hakikat ışığı.",
    "Tabîb": "Hekim, doktor. Şiirde âşığın derdine çare bulamayan akıl ehli.",
    "Terkîb-i Bend": "Bentlerle kurulan, her bent sonunda vasıta beyti değişen musammat nazım şekli.",
    "Vahdet-i Vücûd": "Varlığın tekliği; yaratılmış her şeyin Hakk'ın tecellisinden ibaret olduğu tasavvufi öğreti.",
    "Vuslat": "Sevgiliye kavuşma hali.",
    "Zâhid": "Kuru kuralcı, şekle ve cennet menfaatine takılan sığ din adamı tipi.",
    "Zevâid": "Artık, gelir fazlası (Şikâyetnâme'deki vakıf zevâidi)."
  },
  "aruz_kaliplari": [
    {
      "ad": "Remel (1)",
      "kalip": "Fâ'ilâtün / Fâ'ilâtün / Fâ'ilâtün / Fâ'ilün",
      "sembol": "- . - - / - . - - / - . - - / - . -",
      "ornek": "Su Kasîdesi, Öyle Sermestem, Mende Mecnûn'dan Füzûn"
    },
    {
      "ad": "Hezec (1)",
      "kalip": "Mef'ûlü / Mefâ'îlü / Mefâ'îlü / Fâ'ûlün",
      "sembol": "- - . / . - - . / . - - . / - - .",
      "ornek": "Beni Candan Usandırdı"
    },
    {
      "ad": "Hezec (2)",
      "kalip": "Mef'ûlü / Mefâ'îlü / Mefâ'îlü / Fe'ûlün",
      "sembol": "- - . / . - - . / . - - . / . - -",
      "ornek": "Cân Verme Gam-ı Aşka"
    },
    {
      "ad": "Hezec (3 - Mesnevi)",
      "kalip": "Mef'ûlü / Mefâ'îlün / Fe'ûlün",
      "sembol": "- - . / . - - - / . - -",
      "ornek": "Leylâ vü Mecnûn Mesnevîsi"
    },
    {
      "ad": "Muzâri",
      "kalip": "Mef'ûlü / Fâ'ilâtü / Mefâ'îlü / Fâ'ilün",
      "sembol": "- - . / - . - . / . - - . / - . -",
      "ornek": "Dîvân Gazelleri"
    },
    {
      "ad": "Müctes",
      "kalip": "Mefâ'ilün / Fe'ilâtün / Mefâ'ilün / Fe'ilün",
      "sembol": ". - . - / . . - - / . - . - / . . -",
      "ornek": "Dîvân Gazelleri"
    }
  ],
  "quiz_sorulari": [
    {
      "id": 1,
      "soru": "Fuzûlî'nin 'Şi'r-i bî-ilm esâssız dîvâr olur...' sözü hangi eserinin mukaddimesinde geçer?",
      "secenekler": [
        "A) Leylâ vü Mecnûn",
        "B) Türkçe Dîvân Dîbâcesi",
        "C) Şikâyetnâme",
        "D) Beng ü Bâde"
      ],
      "dogru_cevap": 1,
      "aciklama": "Fuzûlî, Türkçe Dîvân'ın Dîbâce (Mukaddime) bölümünde ilimsiz şiirin temelsiz bir duvara benzediğini ve tez yıkılacağını belirtir."
    },
    {
      "id": 2,
      "soru": "'Selâm verdim rüşvet değildür deyu almadılar' cümlesi Fuzûlî'nin hangi meşhur eserine aittir?",
      "secenekler": [
        "A) Rind ü Zâhid",
        "B) Hadîkatü's-Süedâ",
        "C) Şikâyetnâme",
        "D) Su Kasîdesi"
      ],
      "dogru_cevap": 2,
      "aciklama": "Şikâyetnâme, Nişancı Celâlzâde Mustafa Çelebi'ye yazılan ve bürokratik çürümeyi hicveden meşhur mektuptur."
    },
    {
      "id": 3,
      "soru": "Su Kasîdesi toplam kaç beyitten oluşmaktadır ve hangi türde yazılmıştır?",
      "secenekler": [
        "A) 32 Beyit / Na't",
        "B) 15 Beyit / Gazel",
        "C) 50 Beyit / Mersiye",
        "D) 100 Beyit / Münâzara"
      ],
      "dogru_cevap": 0,
      "aciklama": "Su Kasîdesi, 32 beyitten oluşan ve Hz. Peygamber'i metheden (Na't) bir kasidedir."
    },
    {
      "id": 4,
      "soru": "Fuzûlî hangi üç dilde dîvân veya müstakil eserler tertip etmiştir?",
      "secenekler": [
        "A) Türkçe, Arapça, Farsça",
        "B) Türkçe, Rumca, Farsça",
        "C) Arapça, Farsça, Urduca",
        "D) Türkçe, Farsça, Çağatayca"
      ],
      "dogru_cevap": 0,
      "aciklama": "Fuzûlî 'Elsine-i Selâse' olarak bilinen Türkçe, Arapça ve Farsça dillerinde eser veren üç dilli bir şairdir."
    },
    {
      "id": 5,
      "soru": "'Dest-bûsi ârzûsiyle ger ölsem dostlar / Kûze eylen toprağım sunun anunla yâra su' beytinde geçen 'Kûze' ne anlama gelir?",
      "secenekler": [
        "A) Mezar taşı",
        "B) Su testisi / Çömlek",
        "C) Gül yaprağı",
        "D) Kılıç kını"
      ],
      "dogru_cevap": 1,
      "aciklama": "Kûze, Farsça testi anlamına gelir. Şair mezar toprağından bir testi yapılmasını ve sevgiliye onunla su sunulmasını vasiyet eder."
    },
    {
      "id": 6,
      "soru": "Fuzûlî'nin Kerbelâ faciasını anlattığı en meşhur maktel eseri hangisidir?",
      "secenekler": [
        "A) Hadîkatü's-Süedâ",
        "B) Beng ü Bâde",
        "C) Sohbetü'l-Esmâr",
        "D) Rind ü Zâhid"
      ],
      "dogru_cevap": 0,
      "aciklama": "Hadîkatü's-Süedâ (Saadete Ermişlerin Bahçesi), Kerbelâ şehitlerini anlatan lirik ve mensur-manzum maktel eseridir."
    },
    {
      "id": 7,
      "soru": "Fuzûlî mahlası kelime anlamı olarak hangi iki zıt ve derin manayı barındırır?",
      "secenekler": [
        "A) Aşırı / Lüzumsuz ile Faziletli / İlim sahibi",
        "B) Zengin ile Yoksul",
        "C) Genç ile Yaşlı",
        "D) Şair ile Hükümdar"
      ],
      "dogru_cevap": 0,
      "aciklama": "Fuzûlî hem lüzumsuz/hadsiz manasına gelir hem de ilim ve erdem anlamındaki 'fazl' kökünden türer."
    },
    {
      "id": 8,
      "soru": "Klasik divan şiirinde 'kolay görünen fakat benzeri söylenemeyecek kadar derin' üsluba ne ad verilir?",
      "secenekler": [
        "A) Sebk-i Hindî",
        "B) Sehl-i Mümteni",
        "C) Tezkire",
        "D) İrsâl-i Mesel"
      ],
      "dogru_cevap": 1,
      "aciklama": "Fuzûlî'nin şiirleri Sehl-i Mümteni sanatının en mükemmel örneklerini oluşturur."
    }
  ]
};

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("theme-light");
  themeToggle.textContent = document.body.classList.contains("theme-light") ? "☀️ / 🌙" : "🌙 / ☀️";
});

// Tab Navigation
const navBtns = document.querySelectorAll(".nav-btn");
const tabPanes = document.querySelectorAll(".tab-pane");

navBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetTab = btn.getAttribute("data-tab");
    navBtns.forEach(b => b.classList.remove("active"));
    tabPanes.forEach(p => p.classList.remove("active"));

    btn.classList.add("active");
    const activePane = document.getElementById(`tab-${targetTab}`);
    if (activePane) activePane.classList.add("active");
  });
});

// ==========================================
// 1. FÂL-I FUZÛLÎ
// ==========================================
const btnFalCek = document.getElementById("btnFalCek");
const falSonuc = document.getElementById("falSonuc");
const falTur = document.getElementById("falTur");
const falMetin = document.getElementById("falMetin");
const falKaynak = document.getElementById("falKaynak");
const falVezin = document.getElementById("falVezin");
const falSanatlar = document.getElementById("falSanatlar");
const falAnlam = document.getElementById("falAnlam");

btnFalCek.addEventListener("click", () => {
  const havuz = [];

  // Gazellerden
  (CORPUS.gazeller || []).forEach(g => {
    (g.beyitler || []).forEach(b => {
      havuz.push({
        tur: "Gazel Beyti",
        kaynak: `${g.baslik} (Beyit #${b.no})`,
        vezin: g.vezin || "",
        metin: b.turkce,
        anlam: b.sadelesmis,
        sanatlar: b.sanatlar || []
      });
    });
  });

  // Su Kasidesinden
  (CORPUS.su_kasidesi?.beyitler || []).forEach(b => {
    havuz.push({
      tur: "Su Kasîdesi",
      kaynak: `Su Kasîdesi (Beyit #${b.no})`,
      vezin: CORPUS.su_kasidesi.vezin || "",
      metin: b.metin,
      anlam: b.anlam,
      sanatlar: b.sanatlar || ["Na't-ı Şerif"]
    });
  });

  // Hikmetli Sözler
  (CORPUS.hikmetli_sozler || []).forEach(s => {
    havuz.push({
      tur: "Hikmetli Söz",
      kaynak: s.kaynak,
      vezin: "Hikemî / İrşad",
      metin: s.soz,
      anlam: s.anlam,
      sanatlar: ["Hikmet", "İrşad"]
    });
  });

  // Rübâiler
  (CORPUS.rubailer_ve_kitalar || []).forEach(r => {
    havuz.push({
      tur: r.tur || "Rübâi",
      kaynak: `${r.tur} #${r.no}`,
      vezin: r.vezin || "",
      metin: r.metin,
      anlam: r.anlam,
      sanatlar: ["Hikmet", "Tasavvuf"]
    });
  });

  const secilen = havuz[Math.floor(Math.random() * havuz.length)];

  falTur.textContent = secilen.tur;
  falMetin.textContent = `"${secilen.metin}"`;
  falKaynak.textContent = `— ${secilen.kaynak}`;
  falVezin.innerHTML = `<strong>Aruz Vezni:</strong> ${secilen.vezin || "Serbest"}`;
  falSanatlar.innerHTML = `<strong>Sanatlar:</strong> ${secilen.sanatlar.join(", ") || "Hikmet"}`;
  falAnlam.textContent = secilen.anlam;

  falSonuc.classList.remove("hidden");
  falSonuc.scrollIntoView({ behavior: "smooth", block: "nearest" });
});

// ==========================================
// 2. KÜLLİYÂT OKUYUCU
// ==========================================
const subNavBtns = document.querySelectorAll(".sub-nav-btn");
const kulliyatContent = document.getElementById("kulliyatContent");

function renderKulliyat(kategori) {
  kulliyatContent.innerHTML = "";

  if (kategori === "gazeller") {
    (CORPUS.gazeller || []).forEach(g => {
      const card = document.createElement("div");
      card.className = "kulliyat-card";
      card.innerHTML = `
        <div class="kulliyat-header">
          <h3>${g.baslik}</h3>
          <span class="kulliyat-meta">${g.vezin || ""}</span>
        </div>
        <div class="beyitler-list">
          ${g.beyitler.map(b => `
            <div class="beyit-row">
              <div class="beyit-arabic"><strong>[${b.no}]</strong> ${b.turkce}</div>
              <div class="beyit-meaning">➔ <em>Anlamı:</em> ${b.sadelesmis}</div>
              ${b.sanatlar ? `<div class="beyit-arts">✦ Sanatlar: ${b.sanatlar.join(", ")}</div>` : ""}
            </div>
          `).join("")}
        </div>
      `;
      kulliyatContent.appendChild(card);
    });
  } else if (kategori === "su-kasidesi") {
    const sk = CORPUS.su_kasidesi || {};
    const card = document.createElement("div");
    card.className = "kulliyat-card";
    card.innerHTML = `
      <div class="kulliyat-header">
        <h3>${sk.baslik || "Su Kasîdesi"}</h3>
        <span class="kulliyat-meta">${sk.vezin || ""} • Toplam ${sk.toplam_beyit || 32} Beyit</span>
      </div>
      <p class="desc-text">${sk.aciklama || ""}</p>
      <div class="beyitler-list">
        ${(sk.beyitler || []).map(b => `
          <div class="beyit-row">
            <div class="beyit-arabic"><strong>[${b.no}]</strong> ${b.metin}</div>
            <div class="beyit-meaning">➔ <em>Anlamı:</em> ${b.anlam}</div>
            ${b.sanatlar ? `<div class="beyit-arts">✦ Sanatlar: ${b.sanatlar.join(", ")}</div>` : ""}
          </div>
        `).join("")}
      </div>
    `;
    kulliyatContent.appendChild(card);
  } else if (kategori === "mesneviler") {
    (CORPUS.mesneviler || []).forEach(m => {
      const card = document.createElement("div");
      card.className = "kulliyat-card";
      card.innerHTML = `
        <div class="kulliyat-header">
          <h3>${m.baslik}</h3>
          <span class="kulliyat-meta">${m.vezin || ""} • ${m.toplam_beyit} Beyit</span>
        </div>
        <p class="desc-text">${m.konu || ""}</p>
        <div class="beyitler-list">
          ${(m.pasajlar || []).map(p => `
            <div class="beyit-row">
              <h4 style="color: var(--gold-primary); margin-bottom: 6px;">${p.baslik}</h4>
              <div class="beyit-arabic" style="white-space: pre-line;">${p.metin}</div>
              <div class="beyit-meaning">➔ <em>Şerh:</em> ${p.anlam}</div>
            </div>
          `).join("")}
        </div>
      `;
      kulliyatContent.appendChild(card);
    });
  } else if (kategori === "mensur") {
    (CORPUS.mensur_eserler || []).forEach(me => {
      const card = document.createElement("div");
      card.className = "kulliyat-card";
      card.innerHTML = `
        <div class="kulliyat-header">
          <h3>${me.baslik}</h3>
          <span class="kulliyat-meta">${me.tur || ""}</span>
        </div>
        <p class="desc-text" style="color: var(--gold-light);">${me.ozet || ""}</p>
        <div class="beyit-row" style="white-space: pre-line; line-height: 1.8; font-size: 1.05rem;">
          ${me.metin}
        </div>
      `;
      kulliyatContent.appendChild(card);
    });
  } else if (kategori === "rubailer") {
    (CORPUS.rubailer_ve_kitalar || []).forEach(r => {
      const card = document.createElement("div");
      card.className = "kulliyat-card";
      card.innerHTML = `
        <div class="kulliyat-header">
          <h3>${r.tur} #${r.no}</h3>
          <span class="kulliyat-meta">${r.vezin || ""}</span>
        </div>
        <div class="beyit-row">
          <div class="beyit-arabic" style="white-space: pre-line;">${r.metin}</div>
          <div class="beyit-meaning" style="margin-top: 10px;">➔ <em>Şerh:</em> ${r.anlam}</div>
        </div>
      `;
      kulliyatContent.appendChild(card);
    });
  }
}

subNavBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    subNavBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderKulliyat(btn.getAttribute("data-sub"));
  });
});

// İlk yükleme
renderKulliyat("gazeller");

// ==========================================
// 3. CANLI ARAMA MOTORU
// ==========================================
const searchInput = document.getElementById("searchInput");
const searchCount = document.getElementById("searchCount");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", (e) => {
  const query = e.target.value.toLowerCase().trim();
  searchResults.innerHTML = "";

  if (!query) {
    searchCount.textContent = "Aramaya başlamak için bir kelime yazınız.";
    return;
  }

  const results = [];

  // Gazeller
  (CORPUS.gazeller || []).forEach(g => {
    (g.beyitler || []).forEach(b => {
      if (b.turkce.toLowerCase().includes(query) || b.sadelesmis.toLowerCase().includes(query)) {
        results.push({
          type: "Gazel Beyti",
          title: `${g.baslik} (Beyit #${b.no})`,
          text: b.turkce,
          desc: b.sadelesmis
        });
      }
    });
  });

  // Su Kasidesi
  (CORPUS.su_kasidesi?.beyitler || []).forEach(b => {
    if (b.metin.toLowerCase().includes(query) || b.anlam.toLowerCase().includes(query)) {
      results.push({
        type: "Su Kasîdesi",
        title: `Su Kasîdesi #${b.no}`,
        text: b.metin,
        desc: b.anlam
      });
    }
  });

  // Lügat
  for (const [kavram, aciklama] of Object.entries(CORPUS.lugat || {})) {
    if (kavram.toLowerCase().includes(query) || aciklama.toLowerCase().includes(query)) {
      results.push({
        type: "Lügat Kavramı",
        title: `Kavram: ${kavram}`,
        text: kavram,
        desc: aciklama
      });
    }
  }

  // Mesneviler
  (CORPUS.mesneviler || []).forEach(m => {
    (m.pasajlar || []).forEach(p => {
      if (p.metin.toLowerCase().includes(query) || p.anlam.toLowerCase().includes(query)) {
        results.push({
          type: "Mesnevî Pasajı",
          title: `${m.baslik} (${p.baslik})`,
          text: p.metin,
          desc: p.anlam
        });
      }
    });
  });

  searchCount.textContent = `Toplam ${results.length} sonuç bulundu:`;

  if (results.length === 0) {
    searchResults.innerHTML = `<div class="search-result-item" style="text-align: center; color: var(--text-muted);">Sonuç bulunamadı.</div>`;
    return;
  }

  results.forEach(r => {
    const div = document.createElement("div");
    div.className = "search-result-item";
    div.innerHTML = `
      <div class="search-result-type">${r.type} • ${r.title}</div>
      <div style="font-family: var(--font-poetic); font-size: 1.15rem; color: var(--text-primary); margin-bottom: 6px;">${r.text}</div>
      <div style="font-size: 0.92rem; color: var(--text-secondary);">${r.desc}</div>
    `;
    searchResults.appendChild(div);
  });
});

// ==========================================
// 4. ARUZ VEZNİ ANALİZÖRÜ
// ==========================================
function jsHecele(kelime) {
  const unluler = new Set("aeıioöuüAEIİOÖUÜâîûÂÎÛ");
  if (!kelime) return [];

  const vIndices = [];
  for (let i = 0; i < kelime.length; i++) {
    if (unluler.has(kelime[i])) vIndices.push(i);
  }
  if (vIndices.length === 0) return [kelime];

  const heceler = [];
  let start = 0;
  for (let idx = 0; idx < vIndices.length; idx++) {
    const vCurr = vIndices[idx];
    if (idx === vIndices.length - 1) {
      heceler.push(kelime.slice(start));
    } else {
      const vNext = vIndices[idx + 1];
      const consCount = vNext - vCurr - 1;
      const splitPoint = (consCount <= 1) ? vCurr + 1 : vNext - 1;
      heceler.push(kelime.slice(start, splitPoint));
      start = splitPoint;
    }
  }
  return heceler;
}

function analizAruz(misra) {
  if (!misra.trim()) return null;
  const unluler = new Set("aeıioöuüAEIİOÖUÜâîûÂÎÛ");
  const uzunUnluler = new Set("âîûÂÎÛ");

  const kelimeler = misra.replace(/[^\w\sâîûÂÎÛ']/g, "").split(/\s+/).filter(Boolean);
  const heceListesi = [];
  const semboller = [];

  kelimeler.forEach((kelime, kIdx) => {
    const wHeceler = jsHecele(kelime);
    wHeceler.forEach((hece, hIdx) => {
      const isLast = (kIdx === kelimeler.length - 1 && hIdx === wHeceler.length - 1);
      let sembol = "-";
      if (isLast) {
        sembol = "-";
      } else if ([...hece].some(c => uzunUnluler.has(c))) {
        sembol = "-";
      } else if (unluler.has(hece[hece.length - 1])) {
        sembol = ".";
      } else {
        sembol = "-";
      }
      heceListesi.push(hece);
      semboller.push(sembol);
    });
  });

  let enIyi = null;
  let maxSkor = -1;
  const heceStr = semboller.join("");

  (CORPUS.aruz_kaliplari || []).forEach(k => {
    const sembolStr = k.sembol.replace(/ \/ /g, " ").replace(/\s+/g, "");
    const minL = Math.min(sembolStr.length, heceStr.length);
    let esit = 0;
    for (let i = 0; i < minL; i++) {
      if (sembolStr[i] === heceStr[i]) esit++;
    }
    const skor = (esit / Math.max(sembolStr.length, heceStr.length)) * 100;
    if (skor > maxSkor) {
      maxSkor = skor;
      enIyi = k;
    }
  });

  return {
    misra,
    heceler: heceListesi,
    semboller,
    kalip: enIyi ? enIyi.kalip : "Bilinmiyor",
    ad: enIyi ? enIyi.ad : "Serbest",
    skor: maxSkor.toFixed(1)
  };
}

const aruzInput = document.getElementById("aruzInput");
const btnAruzHesapla = document.getElementById("btnAruzHesapla");
const aruzSonuc = document.getElementById("aruzSonuc");

function renderAruzResult(res) {
  if (!res) return;
  aruzSonuc.innerHTML = `
    <h3 style="color: var(--gold-primary); font-family: var(--font-title); margin-bottom: 12px;">Analiz Sonucu</h3>
    <div style="font-size: 0.95rem; margin-bottom: 8px;"><strong>Mısra:</strong> ${res.misra}</div>
    <div class="aruz-pattern-box">
      ${res.heceler.map((h, i) => `
        <div class="syllable-pill">
          <span class="text">${h}</span>
          <span class="symbol">${res.semboller[i]}</span>
        </div>
      `).join("")}
    </div>
    <div style="margin-top: 16px; font-size: 1.05rem;">
      <strong>Tahmin Edilen Vezin:</strong> <span style="color: #22c55e; font-weight: 700;">${res.kalip}</span>
    </div>
    <div style="color: var(--text-secondary); font-size: 0.9rem; margin-top: 4px;">
      Kalıp: ${res.ad} • Benzerlik: %${res.skor}
    </div>
  `;
  aruzSonuc.classList.remove("hidden");
}

btnAruzHesapla.addEventListener("click", () => {
  const res = analizAruz(aruzInput.value);
  if (res) renderAruzResult(res);
});

document.querySelectorAll(".btn-preset").forEach(btn => {
  btn.addEventListener("click", () => {
    aruzInput.value = btn.getAttribute("data-text");
    const res = analizAruz(aruzInput.value);
    if (res) renderAruzResult(res);
  });
});

// ==========================================
// 5. DÎVÂN LÜGATİ
// ==========================================
const lugatGrid = document.getElementById("lugatGrid");
const lugatSearch = document.getElementById("lugatSearch");

function renderLugat(filter = "") {
  lugatGrid.innerHTML = "";
  const q = filter.toLowerCase().trim();

  for (const [kavram, aciklama] of Object.entries(CORPUS.lugat || {})) {
    if (!q || kavram.toLowerCase().includes(q) || aciklama.toLowerCase().includes(q)) {
      const card = document.createElement("div");
      card.className = "lugat-card";
      card.innerHTML = `
        <h4>${kavram}</h4>
        <p>${aciklama}</p>
      `;
      lugatGrid.appendChild(card);
    }
  }
}

lugatSearch.addEventListener("input", (e) => renderLugat(e.target.value));
renderLugat();

// ==========================================
// 6. BİLGİ YARIŞMASI
// ==========================================
let currentQuestions = [];
let currentIndex = 0;
let currentScore = 0;

const quizStartView = document.getElementById("quizStartView");
const quizGameView = document.getElementById("quizGameView");
const quizEndView = document.getElementById("quizEndView");
const btnQuizBaslat = document.getElementById("btnQuizBaslat");
const btnQuizNext = document.getElementById("btnQuizNext");
const btnQuizTekrar = document.getElementById("btnQuizTekrar");

const quizProgressFill = document.getElementById("quizProgressFill");
const quizQuestionNumber = document.getElementById("quizQuestionNumber");
const quizScore = document.getElementById("quizScore");
const quizQuestionText = document.getElementById("quizQuestionText");
const quizOptionsList = document.getElementById("quizOptionsList");
const quizFeedback = document.getElementById("quizFeedback");
const quizFeedbackStatus = document.getElementById("quizFeedbackStatus");
const quizFeedbackExplanation = document.getElementById("quizFeedbackExplanation");

function startQuiz() {
  const sorular = [...(CORPUS.quiz_sorulari || [])];
  sorular.sort(() => Math.random() - 0.5);
  currentQuestions = sorular.slice(0, 5);
  currentIndex = 0;
  currentScore = 0;

  quizStartView.classList.add("hidden");
  quizEndView.classList.add("hidden");
  quizGameView.classList.remove("hidden");

  renderQuizQuestion();
}

function renderQuizQuestion() {
  quizFeedback.classList.add("hidden");
  quizOptionsList.innerHTML = "";

  const q = currentQuestions[currentIndex];
  quizProgressFill.style.width = `${((currentIndex + 1) / currentQuestions.length) * 100}%`;
  quizQuestionNumber.textContent = `Soru ${currentIndex + 1} / ${currentQuestions.length}`;
  quizScore.textContent = `Puan: ${currentScore}`;
  quizQuestionText.textContent = q.soru;

  q.secenekler.forEach((sec, idx) => {
    const btn = document.createElement("button");
    btn.className = "quiz-option-btn";
    btn.textContent = sec;
    btn.addEventListener("click", () => handleAnswer(idx, btn));
    quizOptionsList.appendChild(btn);
  });
}

function handleAnswer(selectedIndex, selectedBtn) {
  const q = currentQuestions[currentIndex];
  const allBtns = quizOptionsList.querySelectorAll(".quiz-option-btn");
  allBtns.forEach(b => b.disabled = true);

  if (selectedIndex === q.dogru_cevap) {
    selectedBtn.classList.add("correct");
    currentScore += 20;
    quizFeedbackStatus.innerHTML = "<strong style='color: #22c55e;'>✔ TEBRİKLER! Doğru Cevap.</strong>";
  } else {
    selectedBtn.classList.add("wrong");
    allBtns[q.dogru_cevap].classList.add("correct");
    quizFeedbackStatus.innerHTML = "<strong style='color: #ef4444;'>✘ YANLIŞ CEVAP!</strong>";
  }

  quizScore.textContent = `Puan: ${currentScore}`;
  quizFeedbackExplanation.textContent = q.aciklama || "";
  quizFeedback.classList.remove("hidden");
}

btnQuizNext.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    renderQuizQuestion();
  } else {
    endQuiz();
  }
});

function endQuiz() {
  quizGameView.classList.add("hidden");
  quizEndView.classList.remove("hidden");

  document.getElementById("quizFinalScore").textContent = `${currentScore} / 100`;
  const msg = document.getElementById("quizFinalMessage");
  if (currentScore === 100) {
    msg.textContent = "🌟 Harika! Tam bir Fuzûlî ve Dîvân Edebiyatı Mütehassısısınız!";
  } else if (currentScore >= 60) {
    msg.textContent = "👏 Gayet başarılı bir edebi birikim!";
  } else {
    msg.textContent = "📚 Külliyâtı inceleyerek bilginizi artırabilirsiniz.";
  }
}

btnQuizBaslat.addEventListener("click", startQuiz);
btnQuizTekrar.addEventListener("click", startQuiz);

// ==========================================
// 7. İSTATİSTİK & BİYOGRAFİ
// ==========================================
const statsGrid = document.getElementById("statsGrid");

function renderStats() {
  const totalGazelBeyit = (CORPUS.gazeller || []).reduce((acc, g) => acc + (g.beyitler?.length || 0), 0);
  const totalSKBeyit = CORPUS.su_kasidesi?.beyitler?.length || 32;
  const totalLugat = Object.keys(CORPUS.lugat || {}).length;
  const totalMesnevi = (CORPUS.mesneviler || []).length;
  const totalMensur = (CORPUS.mensur_eserler || []).length;

  statsGrid.innerHTML = `
    <div class="stat-box">
      <span class="number">${CORPUS.gazeller?.length || 0}</span>
      <span class="label">Başyapıt Gazel (${totalGazelBeyit} Beyit)</span>
    </div>
    <div class="stat-box">
      <span class="number">${totalSKBeyit}</span>
      <span class="label">Su Kasîdesi Beyti (Tam)</span>
    </div>
    <div class="stat-box">
      <span class="number">${totalMesnevi}</span>
      <span class="label">Mesnevî Şaheseri</span>
    </div>
    <div class="stat-box">
      <span class="number">${totalMensur}</span>
      <span class="label">Mensur Eser & Mektup</span>
    </div>
    <div class="stat-box">
      <span class="number">${totalLugat}</span>
      <span class="label">Dîvân Lügati Kavramı</span>
    </div>
    <div class="stat-box">
      <span class="number">${CORPUS.quiz_sorulari?.length || 0}</span>
      <span class="label">Bilgi Yarışması Sorusu</span>
    </div>
  `;
}

renderStats();
