// Fasl-ı Fuzûlî - Modern Web Uygulaması ve Edebiyat Motoru v4.0
// Otomatik Senkronize Veri Tabanı, Belâgat Teşhis Laboratuvarı, Ney Sentezleyici ve Beyit Kartı Motoru

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
    },
    {
      "id": "asiyan-i-murg-i-dil",
      "baslik": "Âşiyân-ı Murg-ı Dil Zülf-i Perîşânındadır",
      "vezin": "Fâ'ilâtün / Fâ'ilâtün / Fâ'ilâtün / Fâ'ilün",
      "redif": "...ındadır / ...indedir",
      "tema": "Aşk, Sadakat, Ayrılık, Hayret",
      "beyitler": [
        {
          "no": 1,
          "turkce": "Âşiyân-ı murg-ı dil zülf-i perîşânındadır / Kanda olsam ey perî gönlüm senin yanındadır",
          "sadelesmis": "Gönül kuşunun yuvası senin o dağınık ve perişan saçlarındadır; ey peri gibi güzel sevgili, ben nerede olursam olayım gönlüm daima senin yanındadır.",
          "sanatlar": [
            "Teşbih-i Belîğ",
            "İstiare",
            "Tenasüp",
            "Nidâ"
          ]
        },
        {
          "no": 2,
          "turkce": "Dâğ-ı hicrânınla yansam lâle-tek ta'n eylemen / Kim bu reng-i âteşîn ser-tâ-kadem cânımdadır",
          "sadelesmis": "Ayrılığının yarasıyla lale gibi bağrım yanık gezsem beni kınamayın; zira bu ateşli kızıl renk tepeden tırnağa benim ruhumun özündedir.",
          "sanatlar": [
            "Teşbih",
            "Tenasüp",
            "İstiare"
          ]
        },
        {
          "no": 3,
          "turkce": "Çâre-i bîmâr-ı aşk etmek tabîbin işi pâk / Âh kim derdim devâsı la'l-i handânındadır",
          "sadelesmis": "Aşk hastasına derman bulmak hekimin kârı değildir; ne yazık ki derdimin tek dermanı sevgilinin gülen kırmızı dudaklarındadır.",
          "sanatlar": [
            "Tenasüp",
            "İstiare",
            "Tezat"
          ]
        },
        {
          "no": 4,
          "turkce": "Cânıma kasd etme zülfün dâm-ı zencîrin çözüp / Kim garîb ü haste-hâl ol bend ü zindânındadır",
          "sadelesmis": "Saçının zincir tuzaklarını çözüp canıma kastetme; çünkü zavallı ve dertli gönlüm ancak senin o zülfünün bağında ve zindanında emniyettedir.",
          "sanatlar": [
            "İstiare",
            "Tenasüp",
            "Hüsn-i Ta'lil"
          ]
        },
        {
          "no": 5,
          "turkce": "Ey Fuzûlî şem'-i meclis tek erir her dem tenim / Âteş-i hecrin nişânı çeşm-i giryânımdadır",
          "sadelesmis": "Ey Fuzûlî! Meclisteki mum gibi bedenim her an aşk ateşiyle eriyip tükenmektedir; ayrılık ateşinin en açık alameti kan döken ağlayan gözlerimdedir.",
          "sanatlar": [
            "Tecrid",
            "Teşbih",
            "Tenasüp"
          ]
        }
      ]
    },
    {
      "id": "panbuk-i-dag-i-cunun",
      "baslik": "Panbûk-ı Dâğ-ı Cünûn İçre Nihândır Bedenim",
      "vezin": "Mef'ûlü / Mefâ'îlü / Mefâ'îlü / Fe'ûlün",
      "redif": "...bu",
      "tema": "Cünun, Melankoli, Tecrid, Aşk Fedakârlığı",
      "beyitler": [
        {
          "no": 1,
          "turkce": "Panbûk-ı dâğ-ı cünûn içre nihândır bedenim / Diri oldukça libâsım bu durur hil'atim bu",
          "sadelesmis": "Bedenim delilik yarasının üzerine basılan pamuklar içinde gizlenmiştir; yaşadığım sürece elbisem de budur, padişah kaftanı gibi giydiğim hil'atim de budur.",
          "sanatlar": [
            "İstiare",
            "Tezat",
            "Tenasüp"
          ]
        },
        {
          "no": 2,
          "turkce": "Tâb-ı âhımdan erir cismini sarmış âhen / Çâk-ı sînemden akan eşk-i revân lezzeti bu",
          "sadelesmis": "Âhımın hararetinden beni saran demir zincirler erimektedir; parçalanmış bağrımdan sel gibi çağlayan gözyaşının lezzeti ve tesellisi işte budur!",
          "sanatlar": [
            "Mübalağa",
            "Tenasüp",
            "Tezat"
          ]
        },
        {
          "no": 3,
          "turkce": "Taş deler âh-ı seher-gâhım ile dûd-ı dilim / Bî-vefâ yâra irişmez mi aceb fürkatim bu",
          "sadelesmis": "Seher vaktindeki âhım ve gönlümün dumanı taşları delip geçer; bu ayrılık feryadım o vefasız sevgiliye hiç mi ulaşmaz?",
          "sanatlar": [
            "Mübalağa",
            "İstifham",
            "Tezat"
          ]
        },
        {
          "no": 4,
          "turkce": "Çıkma ey cân ten-i bîmârımı terk eyleyüben / Ki ser-i kûy-ı nigâra varacak kuvvetim bu",
          "sadelesmis": "Ey can! Sakın bu hasta tenimi terk edip çıkma; çünkü sevgilinin mahallesine kadar yürümeye takat bulacak tek kuvvetim bu candır.",
          "sanatlar": [
            "Nidâ",
            "Tenasüp",
            "Hüsn-i Ta'lil"
          ]
        },
        {
          "no": 5,
          "turkce": "Ey Fuzûlî gam-ı aşk ile safâ buldu gönül / Zevk-ı dünyâ taleb etmem bana bes devletim bu",
          "sadelesmis": "Ey Fuzûlî! Gönül aşkın gamı ile durulup huzur buldu; artık dünyanın fâni zevkini istemem, bu aşk bana en yüce devlettir.",
          "sanatlar": [
            "Tecrid",
            "Tezat",
            "Tasavvufî Hikmet"
          ]
        }
      ]
    },
    {
      "id": "dustu-yine-deli-gonul",
      "baslik": "Düştü Yine Deli Gönül Bir Melek-sîmâ Perîye",
      "vezin": "Fâ'ilâtün / Fâ'ilâtün / Fâ'ilâtün / Fâ'ilün",
      "redif": "...-e",
      "tema": "Aşkın Galibiyeti, Zühdün İflası, Rindlik",
      "beyitler": [
        {
          "no": 1,
          "turkce": "Düştü yine deli gönül bir melek-sîmâ perîye / Akl u fehm ü zühd ü tâat verdi sevdâ yeline",
          "sadelesmis": "Deli gönlüm yine melek yüzlü bir perinin ardına düştü; aklı, anlayışı, sofuluğu ve ibadeti aşkın sevdalı rüzgarına savurdu.",
          "sanatlar": [
            "Teşbih-i Belîğ",
            "Tenasüp",
            "İstiare"
          ]
        },
        {
          "no": 2,
          "turkce": "Âşıkın hâlin ne bilsin zâhid-i sengîn-dil kim / Bermurâd olmamış ol bir büte cânân diyene",
          "sadelesmis": "Taş yürekli kaba sofu aşığın halinden ne anlasın? O ömründe bir kez olsun bir güzele gönül verip vuslat muradına ermemiştir ki!",
          "sanatlar": [
            "Teşbih-i Belîğ",
            "Tezat",
            "İstifham"
          ]
        },
        {
          "no": 3,
          "turkce": "Eşk-i çeşmim kıldı rüsvâ âleme râz-ı nihân / Cürmüm oldur kim inandım her akar göz yâşına",
          "sadelesmis": "Gözümden akan yaşlar saklı sırrımı cümle aleme faş etti; kabahatim odur ki her dökülen gözyaşına güvendim.",
          "sanatlar": [
            "Teşhis",
            "Tezat",
            "Hüsn-i Ta'lil"
          ]
        },
        {
          "no": 4,
          "turkce": "Kâmetin serv-i revândır leblerin câm-ı şerâb / Tûtî-i mûciz-beyânsın benzer ol şîrîn-dile",
          "sadelesmis": "Boyun salınan bir servi, dudakların şarap kadehidir; o tatlı sözlerinle mucizeler söyleyen fasih bir papağana benzersin.",
          "sanatlar": [
            "Açık Teşbih",
            "Tenasüp",
            "Teşbih-i Belîğ"
          ]
        },
        {
          "no": 5,
          "turkce": "Vermezem cânı Fuzûlî vasl-ı cânân görmeden / Kılmazam terk-i taleb irişmeyince menzile",
          "sadelesmis": "Ey Fuzûlî! Sevgilinin vuslatına erişmeden bu canı teslim etmem; hakiki menzile ulaşmadıkça bu kutlu aşk yolculuğunu asla terk etmem!",
          "sanatlar": [
            "Tecrid",
            "Sebat",
            "İstikamet"
          ]
        }
      ]
    },
    {
      "id": "gecti-eyyam-i-bahar",
      "baslik": "Geçti Eyyâm-ı Bahâr Açılmadı Gülzâr-ı Vasl",
      "vezin": "Fâ'ilâtün / Fâ'ilâtün / Fâ'ilâtün / Fâ'ilün",
      "redif": "...içün",
      "tema": "Hicran, Gül ve Bülbül Mazmunu, Aşk Ticareti",
      "beyitler": [
        {
          "no": 1,
          "turkce": "Geçti eyyâm-ı bahâr açılmadı gülzâr-ı vasl / Yanaram bülbül-sıfat her dem gül-i ruhsâr içün",
          "sadelesmis": "Bahar günleri geçti de vuslat gül bahçesi açılmadı; o gül yanaklı sevgili uğruna bülbül gibi durmadan yanıp yakılmaktayım.",
          "sanatlar": [
            "Teşbih",
            "Tenasüp",
            "Hüsn-i Ta'lil"
          ]
        },
        {
          "no": 2,
          "turkce": "Eşk-i hûnînim boyar gül-bergini handân eder / Bî-haberdir gonce-i zîbâ bu dertli zâr içün",
          "sadelesmis": "Kanlı gözyaşlarım gül yaprağını boyayıp güler yüzlü kılar; oysa güzel gonca bu dertli iniltimden büsbütün habersizdir.",
          "sanatlar": [
            "Hüsn-i Ta'lil",
            "Teşhis",
            "Tenasüp"
          ]
        },
        {
          "no": 3,
          "turkce": "Çâk kıldım hırka-i tecrîdi nâmus u heves / Başıma tâc eyledim hâk-i der-i dildâr içün",
          "sadelesmis": "Dünya namusunu ve arzusunu yırtıp tecrit hırkasını giydim; sevgilinin eşiğinin toprağını başıma taç kıldım.",
          "sanatlar": [
            "Tezat",
            "İstiare",
            "Tenasüp"
          ]
        },
        {
          "no": 4,
          "turkce": "Câm-ı mey sun sâkıyâ def' eyle hicrân rencini / Kim safâ hâsıl ola bu haste vü bîmâr içün",
          "sadelesmis": "Ey sâkî! Kadehi sun da bu ayrılık zahmetini defet; zira bu hasta gönle ancak o irfan kadehiyle sefa hâsıl olur.",
          "sanatlar": [
            "Nidâ",
            "Tenasüp",
            "Tasavvufî Remiz"
          ]
        },
        {
          "no": 5,
          "turkce": "Ey Fuzûlî aşk bâzârında nakd-i cân verip / Bir metâ'-ı gam satın aldım dil-i efkâr içün",
          "sadelesmis": "Ey Fuzûlî! Aşk pazarında peşin can sermayesini verdim de bu dertli gönül için keder kumaşı satın aldım!",
          "sanatlar": [
            "Mecâz-ı Mürsel",
            "İstiare",
            "Tecrid"
          ]
        }
      ]
    },
    {
      "id": "gozum-canim-efendim",
      "baslik": "Gözüm Cânım Efendim Sevdüğüm Devletlü Sultânım",
      "vezin": "Mef'ûlü / Mefâ'îlü / Mefâ'îlü / Fe'ûlün",
      "redif": "...devletlü sultânım",
      "tema": "Aşk, Niyâz, Sevgiliye Tazim, İhlas",
      "beyitler": [
        {
          "no": 1,
          "turkce": "Gözüm cânım efendim sevdüğüm devletlü sultânım / Mürüvvetsiz mürüvvet kıl ki geldi cân lebe ânım",
          "sadelesmis": "Gözüm, canım, efendim, sevdiğim, saadetli sultanım! Ey merhametsiz sevgili, artık merhamet eyle zira canım dudağıma geldi, son nefesimdir.",
          "sanatlar": [
            "Nidâ",
            "Tenasüp",
            "Tezat",
            "Mübalağa"
          ]
        },
        {
          "no": 2,
          "turkce": "Gamından şem' tek yandım sabâdan sorma ahvâlim / Bu bağrım kanına gark oldu ey çeşm-i dür-efşânım",
          "sadelesmis": "Gamından mum gibi eriyip yandım, halimi seher rüzgarından sorma; ey inci saçan gözüm, bağrım kan deryasına gark oldu.",
          "sanatlar": [
            "Teşbih",
            "Tenasüp",
            "Teşhis",
            "İstifham"
          ]
        },
        {
          "no": 3,
          "turkce": "Dil-i mahzûnumu gamdan halâs eyle vefâ eyle / Kerem kıl eyle bir ihsân mürüvvet menba'ı hânım",
          "sadelesmis": "Hüzünlü gönlümü gamdan kurtar, vefa göster; ey iyilik ve lütuf membaı hünkarım, bir ihsan eyle.",
          "sanatlar": [
            "Tenasüp",
            "İştikak",
            "Nidâ"
          ]
        },
        {
          "no": 4,
          "turkce": "Sen ol bî-rahm şâhsın kim kulundur hüsrevân yek-ser / Menem ol derd-mend âşık ki bî-hadd oldu efgānım",
          "sadelesmis": "Sen öyle celalli bir sultansın ki bütün padişahlar senin kapında kuldur; bense iniltisi haddi aşmış o dertli aşığım.",
          "sanatlar": [
            "Tezat",
            "Tenasüp",
            "Mübalağa"
          ]
        },
        {
          "no": 5,
          "turkce": "Fuzûlî derd-i hicrânın çeker her dem niyâz eyler / Yüzün görsün safâ bulsun o serv-i bâğ-ı rıdvânım",
          "sadelesmis": "Fuzûlî her an ayrılık derdini çeker ve yalvarır; o cennet bahçesinin servi boylusu sevgilimin yüzünü görsün de gönlü huzur bulsun.",
          "sanatlar": [
            "Tecrid",
            "Teşbih",
            "Tenasüp",
            "Hüsn-i Ta'lil"
          ]
        }
      ]
    },
    {
      "id": "gonul-tan-eyleme-mecnuna",
      "baslik": "Gönül Ta'n Eyleme Mecnûna Sen Hem Bir Zaman Gördün",
      "vezin": "Mefâ'îlün / Mefâ'îlün / Mefâ'îlün / Mefâ'îlün",
      "redif": "...gördün / ...bildin",
      "tema": "Mecnûnluk, Aşkın İstilası, Gönül İkâzı",
      "beyitler": [
        {
          "no": 1,
          "turkce": "Gönül ta'n eyleme Mecnûna sen hem bir zamân gördün / O şûhun hüsnünü kim aklını Mecnûn eder bildin",
          "sadelesmis": "Ey gönül! Mecnûn'u kınayıp ayıplama, sen de bir zamanlar o güzelin cemalini gördün ve onun güzelliğinin aklı Mecnûn ettiğini bizzat bildin.",
          "sanatlar": [
            "Teşhis",
            "Nidâ",
            "Tenasüp",
            "İştikak"
          ]
        },
        {
          "no": 2,
          "turkce": "Perî-rûlar cefâsından şikâyet eylemek olmaz / Vefâ ummak hatâdır çün bu resm-i bî-vefâ gördün",
          "sadelesmis": "Peri yüzlü güzellerin cefasından şikayet etmek yakışmaz; bu vefasızlık kanununu gördükten sonra onlardan vefa ummak ziyan ve hatadır.",
          "sanatlar": [
            "Tezat",
            "Tenasüp",
            "Teşbih-i Belîğ"
          ]
        },
        {
          "no": 3,
          "turkce": "Cünûn sahrâsına düşmek değildir ihtiyâr ile / Çü zülfün dâmına düşdün belâ-yı aşkı pâ-ber-câ gördün",
          "sadelesmis": "Delilik ve mecnunluk çölüne düşmek insanın kendi iradesiyle olmaz; zira sevgilinin saçının tuzağına yakalanınca aşk belasını yerli yerinde gördün.",
          "sanatlar": [
            "Tenasüp",
            "İstiare",
            "Teşbih"
          ]
        },
        {
          "no": 4,
          "turkce": "Fuzûlî haste-dil aşk içre sabr ü tâkat aramaz / Bu rüsvâlık rehinde her ne geldiyse revâ gördün",
          "sadelesmis": "Gönlü yaralı Fuzûlî aşk yolunda sabır ve derman aramaz; bu melamet ve rüsvaylık yolunda başına her ne geldiyse hak ve layık gördün.",
          "sanatlar": [
            "Tecrid",
            "Tenasüp",
            "Tasavvufî Hikmet"
          ]
        }
      ]
    },
    {
      "id": "ey-bi-vefa-ki-adet-olupdur",
      "baslik": "Ey Bî-vefâ Ki Âdet Olupdur Cefâ Sana",
      "vezin": "Mef'ûlü / Fâ'ilâtü / Mefâ'îlü / Fâ'ilün",
      "redif": "...sana",
      "tema": "Cefa, Vefasızlık, Sitem, Teslimiyet",
      "beyitler": [
        {
          "no": 1,
          "turkce": "Ey bî-vefâ ki âdet olupdur cefâ sana / Billâh cefâdır eyleme gel bî-vefâ sana",
          "sadelesmis": "Ey cefayı kendine huy edinmiş vefasız güzel! Allah için vefasızlık sana yakışmıyor, gel etme; zulüm sana da cefa olur.",
          "sanatlar": [
            "İştikak",
            "Nidâ",
            "Tezat",
            "Cinas"
          ]
        },
        {
          "no": 2,
          "turkce": "Cânım fedâ-yı la'l-i lebin kılmağa beni / Gönderdi kûyuna gam-ı aşkın vefâ sana",
          "sadelesmis": "Canımı o yakut dudağına feda etmek üzere, aşkının gamı sana vefasını ispat için beni senin mahallene gönderdi.",
          "sanatlar": [
            "Tenasüp",
            "Teşhis",
            "Tezat"
          ]
        },
        {
          "no": 3,
          "turkce": "Yağdırma tîr-i gamzen ile bağrıma keder / Lutf eyle kim kul oldu bu dilde safâ sana",
          "sadelesmis": "Yan bakışının oklarıyla bağrıma keder yağdırma; lütfet zira bu gönüldeki bütün huzur ve safa sana köle oldu.",
          "sanatlar": [
            "İstiare",
            "Teşbih",
            "Tenasüp"
          ]
        },
        {
          "no": 4,
          "turkce": "Hâl-i perîşânıma rahm eyle gel berü / Göster cemâl-i pür-ziyâ ey meh-likā sana",
          "sadelesmis": "Perişan halime merhamet eyle de beri gel; ey ay yüzlü sevgili, o ışık saçan cemalini göster ki sana hayran olayım.",
          "sanatlar": [
            "Teşbih",
            "Nidâ",
            "Tenasüp"
          ]
        },
        {
          "no": 5,
          "turkce": "Kılmaz Fuzûlî terk-i tarîk-i mahabbetin / Ger kılsa her dem ehl-i melâmet cefâ sana",
          "sadelesmis": "Bütün kınayıcılar her dem sana ve aşığa cefa etse de, Fuzûlî senin sevginin yolunu asla terk etmez.",
          "sanatlar": [
            "Tecrid",
            "Tezat",
            "Tenasüp"
          ]
        }
      ]
    },
    {
      "id": "hasilim-hun-i-cigerdir",
      "baslik": "Hâsılım Hûn-ı Ciğerdir Kârdan Âsîb-i Dehr",
      "vezin": "Fâ'ilâtün / Fâ'ilâtün / Fâ'ilâtün / Fâ'ilün",
      "redif": "Yok (Yalın / Zengin Kafiye)",
      "tema": "Dünyadan El Çekme, Melâmet, Rindlik, Izdırap",
      "beyitler": [
        {
          "no": 1,
          "turkce": "Hâsılım hûn-ı ciğerdir dille la'l-i yârdan / Nükte-i ser-beste söyler bî-haber esrârdan",
          "sadelesmis": "Sevgilinin la'l dudağını anan gönülden bana kalan tek kazanç ciğer kanıdır; ilahi sırlardan habersiz olanlar bu örtülü nükteyi anlayamaz.",
          "sanatlar": [
            "Teşbih",
            "Tenasüp",
            "Tezat"
          ]
        },
        {
          "no": 2,
          "turkce": "Çekme zâhid dâmen-i pâkin harâbât ehlinden / Kim tahâret ehli pâk olmaz bu nâ-hemvârdan",
          "sadelesmis": "Ey ham sofu, temiz eteğini meyhane rindlerinden kaçırma; zira şekilci temizlik ehli bu eğriliklerden asla arınmış sayılmaz.",
          "sanatlar": [
            "Tezat",
            "Tenasüp",
            "Teşbih"
          ]
        },
        {
          "no": 3,
          "turkce": "Tûtiyâ-yı çeşmim eyler hâk-i râh-ı kûyunu / Başını taştan taşa ursun bu seyl-i zârdan",
          "sadelesmis": "Sevgilinin sokak toprağını gözüme sürme yaparım; bu feryat eden gözyaşı seli başını taştan taşa vursun.",
          "sanatlar": [
            "Hüsn-i Ta'lil",
            "Teşhis",
            "Teşbih",
            "Tenasüp"
          ]
        },
        {
          "no": 4,
          "turkce": "Dâğ-ı aşkındır Fuzûlî göğsümün pîrâyesi / Şâd-kâmam dehr içinde devr-i bî-âsârdan",
          "sadelesmis": "Ey Fuzûlî, göğsümün yegane süsü onun aşkının yarasıdır; bu vefasız felek içinde bana kalan tek bahtiyarlık ve teselli de budur.",
          "sanatlar": [
            "Tecrid",
            "Teşbih",
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
    "Âb-ı Hayât": "İçene ebedî hayat bahşeden dirilik suyu; sevgilinin dudağı veya feyz-i ilahi.",
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
    "Dîbâce": "Eserlerin başındaki mensur veya manzum mukaddime; Fuzûlî'nin şiir felsefesini izah ettiği manifesto.",
    "Dildâr / Dilber": "Gönlü alan, sevgili. Hakiki manada Cenâb-ı Hak veya O'nun tecellisi.",
    "Eşk": "Gözyaşı. Genellikle kanlı (hûn-efşân) olarak tasvir edilir.",
    "Fenâ / Fenâfillâh": "Kulun kendi benliğinden geçip Hakk'ın varlığında yok olması.",
    "Gamze": "Yan bakış, sevgilinin göz süzüşü. Şiirde âşığın kalbini vuran ok veya hançer.",
    "Gavvâs": "Dalgıç. Fikir denizine dalan derin mütefekkir.",
    "Giryân": "Ağlayan, gözyaşı döken.",
    "Harâbât": "Meyhane veya viranelik; zahir ehlinin hor gördüğü, ancak hakiki ariflerin benlikten soyunup aşkla dolduğu irfan tekkesi.",
    "Hem-dem": "Can ciğer dost, aynı nefesi paylaşan arkadaş.",
    "Hicrân": "Ayrılık acısı. Vuslattan daha yüce görülen aşkı diri tutan hâl.",
    "Hüsn": "Güzellik. Mutlak Cemâl'in dünyadaki aynası.",
    "Hüsn-i Ta'lil": "Bir doğa olayını veya durumu şairane ve güzel hayali bir sebebe bağlama sanatı.",
    "Kûy": "Sevgilinin oturduğu mahalle, semt veya dergâh.",
    "Kûze": "Testi, çömlek. Âşığın toprağından yapılan su kabı.",
    "Künc": "Köşe, kuytu yer (örn. künc-i gam: dert ve hüzün köşesi).",
    "Lâle-gûn": "Lale renkli, al, kan kırmızı.",
    "Maktel": "Hz. Hüseyin ve Kerbelâ şehitlerinin destansı şehadetini anlatan edebî tür.",
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
    "Vahdet-i Vücûd": "Varlığın birliği; tek mutlak varlığın Hak olduğu ve kâinattaki bütün kesretin O'nun tecellisinden ibaret bulunduğu tasavvufi idrak.",
    "Vuslat": "Sevgiliye kavuşma hali.",
    "Zâhid": "Kuru kuralcı, şekle ve cennet menfaatine takılan sığ din adamı tipi.",
    "Zevâid": "Artık, gelir fazlası (Şikâyetnâme'deki vakıf zevâidi).",
    "Serv-i Revân": "Salınarak yürüyen servi boylu güzel; tasavvufta ilahi tecelli ve istikametin remzi.",
    "Kûy-ı Cânân": "Sevgilinin mahallesi, semti; tasavvufi manada Hakk'a vasıl olunan kurbiyet ve vuslat makamı.",
    "Çeşm-i Cadû": "Aşığın aklını başından alan büyüleyici ve sihirbaz göz; fitne koparan bakış.",
    "Leb-i La'l": "Kırmızı yakut gibi değerli ve can bağışlayan sevgili dudağı; İsa nefesi gibi dirilten lütuf.",
    "Pîr-i Mugân": "Meyhaneci pir; hakikat yolunda müride irfan şarabı sunan kâmil mürşid.",
    "Hatt": "Sevgilinin yanağında yeni beliren ince ayva tüyleri; Kur'an ayetlerine, reyhan yazısına ve hüsnün kemaline teşbih edilir.",
    "Hâk-i Pây": "Ayağın toprağı; aşığın tevazu göstererek sevgilinin bastığı toprağa baş koyması, fenâ hâli.",
    "Şem' ü Pervâne": "Mum ve etrafında dönüp kendini ateşe atan kelebek; mutlak aşk uğrunda feda olmanın sembolü.",
    "Bâde-i Elest": "Elest bezminde (ruhlar meclisinde) Allah'a verilen kulluk sözünün sarhoşluğu ve ezelî aşk.",
    "Çark-ı Çep-gerdîş": "Tersine dönen kahpe felek; talihin aşığa ve erdemliye yüz vermeyip liyakatsizleri kayırması.",
    "Câm-ı Cem": "Cemşid'in bütün dünyayı gösteren efsanevi kadehi; hakikati yansıtan saf arif gönlü.",
    "Dehr": "Zaman, dünya, fani devran; faniliği sebebiyle gönül bağlanmaması gereken fani konak.",
    "Dûd-ı Dil": "Gönül dumanı; aşk ateşinin yürekte yanmasıyla aşığın ağzından çıkan dertli âh nefesi.",
    "Gül ü Bülbül": "Dîvân şiirinin en temel alegorisi; bülbül aşığın feryadını, nazlanan ve dikeniyle inciten gül ise sevgiliyi simgeler.",
    "Hüsn-i Mutlak": "Mutlak güzellik; kainattaki bütün güzelliklerin kaynağı olan Cenâb-ı Hakk'ın kemâl sıfatı.",
    "Katle Ferman": "Sevgilinin keman kaşları ve gamze oklarıyla aşığın canına kastetmesi, can sermayesini teslim alma iradesi.",
    "Meclis-i Bezm": "İrfan ve muhabbet meclisi; hakiki dostların toplanıp dertleştiği, zahir bağlarından kurtulduğu bezm.",
    "Mest-i Müdâm": "Sürekli sarhoş olan; ilahi aşk şarabıyla her dem kendinden geçmiş, ayıklık gafletine düşmeyen arif.",
    "Nergis-i Şehlâ": "Baygın ve mahmur bakan nergis çiçeği; sevgilinin mestane ve büyüleyici gözünün timsali.",
    "Niyâz": "Yalvarma, dua ve tevazu; aşığın daima niyaz, maşukun ise naz makamında olması kuralı.",
    "Rüsvâ-yı Âlem": "Aşkı yüzünden cümle aleme rezil ve rüsvay olmuş; kınayanların kınamasından korkmayan melâmet eri.",
    "Sîne-i Çâk": "Ayrılık ve hasret kılıcıyla baştan başa yarılmış, parçalanmış göğüs.",
    "Sûz u Güzâz": "Yanıp kavrulma ve erime; Fuzûlî'nin şiirlerindeki en belirgin ruh hali, aşk ızdırabının yoğunluğu.",
    "Tâc-ı Saâdet": "Sevgilinin kapı eşiğinin toprağını başa taç etmek; hakiki saadetin dünyevi mevkide değil aşkta bulunması.",
    "Tîr-i Müjgân": "Kirpik oku; sevgilinin göz kapaklarını açıp kapamasıyla aşığın yüreğine saplanan keskin oklar.",
    "Yâr-ı Gār": "Mağara yoldaşı; Hz. Ebubekir'e telmih ile, en sıkıntılı ve tehlikeli demde dostunu asla terk etmeyen vefadar yoldaş.",
    "Zümrüd-i Ankâ": "Kaf Dağı'nda yaşadığına inanılan, adı olup cismi bulunmayan efsanevi kuş; kanaat, uzlet ve tasavvufi vahdet sembolü.",
    "Meyhâne": "Aşk ve vecd meclisi; rindlerin dünya kaygısını unuttuğu irfan dergâhı.",
    "Hüsn-i Ta'lîl": "Bir vakıayı tabii sebebinin haricinde hayalî, latif ve şiirsel bir sebebe bağlama sanatı.",
    "Tecâhül-i Ârif": "Bildiği bir hakikati nükte ve şairane hayret oluşturmak için bilmezden gelme sanatı.",
    "Teşbih-i Belîğ": "Benzetme edatı ve benzetme yönü zikredilmeden yalnızca benzeyen ve benzetilenle yapılan asil teşbih.",
    "Kesret": "Çokluk âlemi; vahdetin zıddı olup maddî dünyanın aldatıcı ve dağıtıcı çokluğu.",
    "Mâsivâ": "Allah'tan gayrı olan her şey; arifin kalbinden tamamen silip atması gereken fâni dünya alâkaları.",
    "Tecellî": "İlâhî nurun ve esmâ-i hüsnânın kulun kalbinde veya varlık aynasında aşikâr olması.",
    "Kâmet-i Mevzûn": "Dengeli, vezinli ve servi gibi biçimli boy; ilahî güzelliğin ve istikametin timsali.",
    "Hâl-i Hindû": "Hindistanlı köle gibi kara olan ben; sevgilinin yüzündeki siyah ben ve gönülleri esir eden tılsım.",
    "Dehen-i Tang": "Dar ve nokta gibi ağız; yokluk (adem) âleminin ve lâhûtî sırların tecessümü.",
    "Kûy-ı Yâr": "Sevgilinin mahallesi veya kapısının eşiği; arifin sığındığı Kâbe mesabesindeki vuslat diyarı.",
    "Melâmet": "Kınanma ve kınayıcıların ayıplamasını zevk bilme; riyadan kaçarak iç alemi ihlas ve ıstırapla donatma yolu.",
    "Cünûn": "Aşk deliliği; aklın sınırlarını aşıp cezbe, hayret ve fenâ makamına ulaşma hali.",
    "Hüsn ü Ân": "Suret güzelliği ile içsel eda ve cazibenin birleşimi; maşukun karşı konulmaz cezbesi.",
    "Gül-zâr": "Gül bahçesi; sevgilinin cemali veya ilahi tecellilerin seyredildiği mana meclisi.",
    "Hâb-ı Gaflet": "Gaflet uykusu; hakikatten bihaber yaşama hali.",
    "Belâ-yı Aşk": "Aşk imtihanı ve ızdırabı; Fuzûlî'ye göre şairin ve arifin olgunlaşması için talep ettiği en tatlı eza.",
    "Sebk-i Hindî": "Fuzûlî'nin şiirlerinde erken nüveleri görülen; derin muhayyile, girift mazmunlar ve ıstırap estetiği içeren şiir akımı.",
    "Musammat Gazel": "Mısra ortalarında iç kafiye barındıran ve ikiye bölündüğünde dörtlük haline gelebilen ahenkli gazel türü.",
    "İrsâl-i Mesel": "Şiirde atasözü veya darb-ı mesel niteliğinde hikmetli bir söz zikretme sanatı.",
    "İştikak": "Aynı kökten türeyen sözcükleri bir mısra veya beyitte bir araya getirerek ahenk sağlama sanatı.",
    "Mazmûn": "Klasik divan şiirinde kalıplaşmış, nükte ve mecaz yüklü gizli mana ve imge.",
    "Revî": "Kafiyeyi oluşturan asıl ve son değişmez sessiz harf.",
    "Taktî'": "Bir mısrayı aruz vezninin tef'ile (cüz) parçalarına göre hece hece ayırıp vezin ahengini kontrol etme işlemi.",
    "Zihaf": "Aruz vezninde zorunlu olarak uzun bir heceyi kısa okuma kuralı veya vezin tasarrufu.",
    "İmâle": "Aruz veznine uydurmak maksadıyla Türkçe kısa bir heceyi çekerek uzun okuma.",
    "Vasl (Ulama)": "Sonu ünsüzle biten kelimeyi, ünlüyle başlayan sonraki kelimeye bağlayarak heceyi açık hale getirme.",
    "Kasr": "Uzun ünlüyle biten bir kelimeyi aruz icabı kısaltarak okuma tasarrufu.",
    "Med": "Bir uzun ünlü ve bir ünsüzle biten hecenin aruzda bir buçuk hece (kapalı + açık) değerinde sayılması."
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
    },
    {
      "kalip": "Fâ'ilâtün / Fâ'ilâtün / Fâ'ilün",
      "sembol": "- . - - / - . - - / - . -",
      "ad": "Remel Bahri (Kısa / Mesnevî)",
      "ornek": "Gözlerin gördüm ser-â-ser nûr imiş"
    },
    {
      "kalip": "Müstef'ilün / Müstef'ilün / Müstef'ilün / Müstef'ilün",
      "sembol": "- - . - / - - . - / - - . - / - - . -",
      "ad": "Recez Bahri (Murabba & Şarkı)",
      "ornek": "Dil haste vü cân teşne-i vuslat güzer eyler"
    },
    {
      "kalip": "Müfte'ilün / Fâ'ilün / Müfte'ilün / Fâ'ilün",
      "sembol": "- . . - / - . - / - . . - / - . -",
      "ad": "Münserih Bahri",
      "ornek": "Gülşene gel ey perî gonceler handân ola"
    },
    {
      "kalip": "Fâ'ilâtün / Fâ'ilâtün / Fâ'ilâtün",
      "sembol": "- . - - / - . - - / - . - -",
      "ad": "Remel Bahri (Müseddes)",
      "ornek": "Eşk-i çeşmim akıtır her dem gubârım"
    },
    {
      "kalip": "Fe'ilâtün / Fe'ilâtün / Fe'ilâtün / Fe'ilün",
      "sembol": ". . - - / . . - - / . . - - / . . -",
      "ad": "Remel Bahri (Müsemen Mahbûn)",
      "ornek": "Gözüm ol serv-i revân ardınca revân eylerem"
    },
    {
      "kalip": "Mefâ'îlün / Mefâ'îlün / Mefâ'îlün / Mefâ'îlün",
      "sembol": ". - - - / . - - - / . - - - / . - - -",
      "ad": "Hezec Bahri (Müsemen Sâlim)",
      "ornek": "Cefâdan bezmezem ger cânıma kasd eylese cânân"
    },
    {
      "ad": "Hezec Bahri (Müseddes Mahzûf)",
      "kalip": "Mefâ'ilün / Mefâ'ilün / Fe'ûlün",
      "sembol": ". - . - / . - . - / . - -",
      "ornek": "Dîvân Kıta ve Gazelleri"
    },
    {
      "ad": "Hafif Bahri (Klasik)",
      "kalip": "Fe'ilâtün / Mefâ'ilün / Fe'ilün",
      "sembol": ". . - - / . - . - / . . -",
      "ornek": "Gam-ı aşkınla pür-safâdır dil"
    },
    {
      "ad": "Recez Bahri (Müseddes)",
      "kalip": "Müstef'ilün / Müstef'ilün / Müstef'ilün",
      "sembol": "- - . - / - - . - / - - . -",
      "ornek": "Cân mülkünü vîrân eden hicrândır"
    },
    {
      "ad": "Mütedârik Bahri (Sâlim)",
      "kalip": "Fâ'ilün / Fâ'ilün / Fâ'ilün / Fâ'ilün",
      "sembol": "- . - / - . - / - . - / - . -",
      "ornek": "Dilde gam zevk-i cân lezzet-i vuslat"
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
    },
    {
      "id": 9,
      "soru": "Fuzûlî ile Bağdat'ta bizzat görüşmüş ve onun hakkında 'Gülşen-i Şu'arâ' tezkiresinde ilk elden bilgi vermiş yazar kimdir?",
      "secenekler": [
        "A) Âşık Çelebi",
        "B) Ahdî-i Bağdâdî",
        "C) Latîfî",
        "D) Sehî Bey"
      ],
      "dogru_cevap": 1,
      "aciklama": "Ahdî-i Bağdâdî, Gülşen-i Şu'arâ tezkiresinde Fuzûlî ile bizzat meclislerde görüştüğünü ve onun derin ilmini tevsik ettiğini belirtir."
    },
    {
      "id": 10,
      "soru": "'Âşiyân-ı murg-ı dil zülf-i perîşânındadır / Kanda olsam ey perî gönlüm senin yanındadır' matla beytinde 'murg-ı dil' (gönül kuşu) hangi edebî sanatın örneğidir?",
      "secenekler": [
        "A) Teşbih-i Belîğ (Gönül kuşa benzetilmiştir)",
        "B) Tezat",
        "C) Cinas",
        "D) Tecâhül-i Ârif"
      ],
      "dogru_cevap": 0,
      "aciklama": "Gönül kuşa benzetilmiş, benzetme edatı ve yönü zikredilmediği için beliğ teşbih (teşbih-i belîğ) yapılmıştır."
    },
    {
      "id": 11,
      "soru": "Fuzûlî'nin tasavvufi aşk felsefesinde 'Panbûk-ı dâğ-ı cünûn içre nihândır bedenim' mısrasındaki 'panbuk' (pamuk) neyi ifade eder?",
      "secenekler": [
        "A) Zenginlik ve ipek ticaretini",
        "B) Aşk ve delilik yaralarının üstüne basılan pamuk sargıyı",
        "C) Kış mevsiminin karlarını",
        "D) Sarayda giyilen beyaz elbiseleri"
      ],
      "dogru_cevap": 1,
      "aciklama": "Eski tıpta ve divan edebiyatında cünun (delilik) ve ateşli yaraların dağlanıp üzerine pamuk basılması Mecnûnane aşk halinin simgesidir."
    },
    {
      "id": 12,
      "soru": "Fuzûlî'nin ünlü kasidesi 'Su Kasîdesi' klasik Türk edebiyatında hangi türün en şaheser örneğidir?",
      "secenekler": [
        "A) Hicviye",
        "B) Mersiye",
        "C) Na't-ı Şerîf (Peygamber Efendimiz'e övgü)",
        "D) Fahriye"
      ],
      "dogru_cevap": 2,
      "aciklama": "Su Kasîdesi, Peygamberimiz Hz. Muhammed (s.a.v.)'e ithafen yazılmış 32 beyitlik eşsiz bir Na't-ı Şeriftir."
    },
    {
      "id": 13,
      "soru": "Fuzûlî'nin Leylâ vü Mecnûn mesnevîsinin aruz vezni aşağıdakilerden hangisidir?",
      "secenekler": [
        "A) Mef'ûlü / Mefâ'îlü / Mefâ'îlü / Fâ'ûlün",
        "B) Mef'ûlü / Mefâ'îlün / Fe'ûlün",
        "C) Fâ'ilâtün / Fâ'ilâtün / Fâ'ilün",
        "D) Fe'ilâtün / Fe'ilâtün / Fe'ilün"
      ],
      "dogru_cevap": 1,
      "aciklama": "Leylâ vü Mecnûn, mesnevîlerin klasik Hezec bahri olan 'Mef'ûlü Mefâ'îlün Fe'ûlün' kalıbıyla nazmedilmiştir."
    },
    {
      "id": 14,
      "soru": "Fuzûlî'nin Kanunî Sultan Süleyman'ın Bağdat fethi sonrası kendisine bağlanan maaşın ödenmemesi üzerine bürokrasiyi hicvettiği eseri hangisidir?",
      "secenekler": [
        "A) Şikâyetnâme",
        "B) Hadîkatü's-Süedâ",
        "C) Rind ü Zâhid",
        "D) Beng ü Bâde"
      ],
      "dogru_cevap": 0,
      "aciklama": "'Selâm verdim rüşvet değildür deyu almadılar' meşhur cümlesi Şikâyetnâme mektubunda geçer."
    },
    {
      "id": 15,
      "soru": "'Sâçma ey göz eşkden gönlümdeki odlara su / Kim bu denlü tutuşan odlara kılmaz çâre su' beytinde 'su' sözcüklerinin aynı yazılış ve anlamda tekrarlanması nedir?",
      "secenekler": [
        "A) Kafiye",
        "B) Redif",
        "C) Cinas",
        "D) İştikak"
      ],
      "dogru_cevap": 1,
      "aciklama": "Mısra sonlarında aynı anlam ve görevle tekrarlanan 'su' kelimeleri kasidenin müstakil redifidir."
    },
    {
      "id": 16,
      "soru": "Fuzûlî hangi üç dilde tam müstakil Dîvân tertip etmiştir?",
      "secenekler": [
        "A) Türkçe - Farsça - Arapça",
        "B) Türkçe - Rumca - Farsça",
        "C) Türkçe - Arapça - Süryanice",
        "D) Farsça - Arapça - Çağatayca"
      ],
      "dogru_cevap": 0,
      "aciklama": "Fuzûlî; Türkçe, Farsça ve Arapça dillerinin üçünde de divan tertip etmiş Doğu edebiyatının nâdir üç dilli dâhisidir."
    },
    {
      "id": 17,
      "soru": "Fuzûlî'nin Türkçe Dîvân'ında 'Beni cândan usandırdı...' matlaıyla başlayan gazeli mısra ortalarında iç kafiye barındırdığı için hangi gazel türünün şaheseridir?",
      "secenekler": [
        "A) Musammat Gazel",
        "B) Müstezâd",
        "C) Şarkı",
        "D) Terkîb-i Bend"
      ],
      "dogru_cevap": 0,
      "aciklama": "Mısra ortaları ve sonları kafiyeli olan, ikiye bölününce dörtlük teşkil edebilen gazellere 'Musammat Gazel' adı verilir."
    },
    {
      "id": 18,
      "soru": "Klasik edebiyatta doğal bir hadiseyi gerçek sebebi dışında hayalî ve şiirsel güzel bir sebebe bağlama sanatına ne ad verilir?",
      "secenekler": [
        "A) Tecâhül-i Ârif",
        "B) Hüsn-i Ta'lîl",
        "C) Teşbih-i Belîğ",
        "D) Tenasüp"
      ],
      "dogru_cevap": 1,
      "aciklama": "Hüsn-i Ta'lîl, suyun Hz. Peygamber'in ayağına yüz sürmek için taştan taşa baş vurup akması örneğinde olduğu gibi güzel sebebe bağlama sanatıdır."
    },
    {
      "id": 19,
      "soru": "Fuzûlî'nin 'Gözüm cânım efendim sevdüğüm devletlü sultânım' mısraıyla başlayan meşhur gazelinin aruz vezni hangisidir?",
      "secenekler": [
        "A) Fâ'ilâtün / Fâ'ilâtün / Fâ'ilâtün / Fâ'ilün",
        "B) Mef'ûlü / Mefâ'îlü / Mefâ'îlü / Fe'ûlün",
        "C) Mefâ'îlün / Mefâ'îlün / Fe'ûlün",
        "D) Fe'ilâtün / Fe'ilâtün / Fe'ilün"
      ],
      "dogru_cevap": 1,
      "aciklama": "Bu gazel, Fuzûlî'nin en coşkulu lirik vezinlerinden 'Mef'ûlü / Mefâ'îlü / Mefâ'îlü / Fe'ûlün' ile nazmedilmiştir."
    },
    {
      "id": 20,
      "soru": "Fuzûlî'nin şiirlerinde sıkça rastlanan 'aşk / âşık / ma'şûk' gibi aynı kökten türeyen sözcüklerin birlikte kullanılması hangi edebî sanattır?",
      "secenekler": [
        "A) Cinas",
        "B) İştikak",
        "C) Tezat",
        "D) İstifham"
      ],
      "dogru_cevap": 1,
      "aciklama": "İştikak, aynı sülasi kökten türeyen kelimeleri bir beyitte sanatkârane bir ahenkle yan yana kullanma sanatıdır."
    },
    {
      "id": 21,
      "soru": "Fuzûlî'nin 'Dost bî-vefâ felek bî-rahm devrân bî-sükûn' mısraında dile getirilen temel tema hangisidir?",
      "secenekler": [
        "A) Saray hayatının zevk ve eğlenceleri",
        "B) Dünyanın faniliği ve melâmet ehlinin yalnızlığı",
        "C) Bahar mevsiminin coşkusu",
        "D) Kahramanlık ve savaş tasviri"
      ],
      "dogru_cevap": 1,
      "aciklama": "Fuzûlî bu gazelinde feleğin acımasızlığı, dostun vefasızlığı ve zamanın çalkantısı karşısında aşığın yalnızlık ve ıstırabını dile getirir."
    },
    {
      "id": 22,
      "soru": "Molla Fuzûlî'nin türbesi ve kabr-i şerîfi hangi mukaddes şehirde bulunmaktadır?",
      "secenekler": [
        "A) İstanbul",
        "B) Tebriz",
        "C) Kerbelâ",
        "D) Şam"
      ],
      "dogru_cevap": 2,
      "aciklama": "Fuzûlî, 1556 yılındaki veba salgınında Kerbelâ'da vefat etmiş olup kabri Hz. Hüseyin Türbesi civarındadır."
    },
    {
      "id": 23,
      "soru": "Fuzûlî'nin afyon (beng) ile şarabı (bâde) sembolik olarak konuşturduğu alegorik münâzara mesnevisi hangisidir?",
      "secenekler": [
        "A) Beng ü Bâde",
        "B) Sohbetü'l-Esmâr",
        "C) Leylâ vü Mecnûn",
        "D) Rind ü Zâhid"
      ],
      "dogru_cevap": 0,
      "aciklama": "Beng ü Bâde, afyon ile şarabın üstünlük münazarasını Şah İsmail'e ithafen anlatan 440 beyitlik alegorik mesnevidir."
    },
    {
      "id": 24,
      "soru": "16. yüzyıl tezkire yazarı Latîfî, Fuzûlî hakkında en çok hangi hususa dikkat çekmiştir?",
      "secenekler": [
        "A) Hiç kimseyi taklit etmeyen kendine has üslûbuna (tarz-ı hâss)",
        "B) Yalnızca hece vezni kullandığına",
        "C) Hiç gazel yazmadığına",
        "D) Sadece mensur eserler verdiğine"
      ],
      "dogru_cevap": 0,
      "aciklama": "Latîfî, Fuzûlî'nin kaside ve gazelde nev-i şahsına münhasır bir tarzı olup kimseye benzemediğini hayranlıkla kaydetmiştir."
    },
    {
      "id": 25,
      "soru": "Fuzûlî'nin 'Şikâyetnâme' adlı eseri dönemin hangi yüksek Osmanlı devlet adamına yazılmış bir mektuptur?",
      "secenekler": [
        "A) Sadrazam Pargalı İbrahim Paşa",
        "B) Nişancı Celâlzâde Mustafa Çelebi",
        "C) Şeyhülislâm Ebussuud Efendi",
        "D) Kaptan-ı Deryâ Barbaros Hayreddin Paşa"
      ],
      "dogru_cevap": 1,
      "aciklama": "Şikâyetnâme, Kanunî devrinin meşhur Nişancısı ve edibi Celâlzâde Mustafa Çelebi'ye ithafen kaleme alınmış şaheser bir mektuptur."
    }
  ],
  "tezkireler": [
    {
      "yazar": "Ahdî-i Bağdâdî",
      "eser": "Gülşen-i Şu'arâ (1563)",
      "onemi": "Fuzûlî ile bizzat Bağdat muhitinde görüşmüş yegâne tezkire yazarı.",
      "metin": "Fuzûlî-i Bağdâdî... Fazîlet ü kemâlât ile mevsûf, zihn-i selîm ü tab'-ı müstakîm ile ma'rûfdur. Arabî vü Fârisî vü Türkî üç dilde şi'r-i bî-nazîre kâdirdir. Ekser-i fünûn-ı hikemiyye vü riyâziyyede mahâret-i tâmı vardır.",
      "anahtar_tespit": "İlim, matematik ve hikmette dahi; üç dilde divan sahibi; samimi ve gösterişsiz âşık."
    },
    {
      "yazar": "Âşık Çelebi",
      "eser": "Meşâ'irü'ş-Şu'arâ (1568)",
      "onemi": "16. yüzyılın en edebi ve psikolojik tahlil zengini tezkiresi.",
      "metin": "Bağdâd iklîminin ser-âmed-i şuarâsı ve ol diyârın tûtî-i şîrîn-edâsıdır. Sözlerinde sûz u güzâz ve girye vü âh-ı dil-sûz öyle bir mertebededir ki her beyti bir cerîde-i derttir. Türkî elfâz ile ol mertebe âşıkâne gazeller inşâ etmiştir ki Rûm şu'arâsı içinde dahi nazîri nâdirdir.",
      "anahtar_tespit": "Sözlerindeki 'sûz u güzâz' (yanıp tutuşma) ve aşk ızdırabının hakikiliği."
    },
    {
      "yazar": "Latîfî",
      "eser": "Tezkiretü'ş-Şu'arâ (1546)",
      "onemi": "Anadolu sahasında Fuzûlî hayatta iken kaleme alınan ilk tezkire.",
      "metin": "Fuzûlî-i bî-hemtâ... Diyâr-ı Arab'da zuhûr eden şu'arânın ferîd-i dehridir. Şi'rinde melâhat-i kelâm ve garâbet-i ma'ânî nihâyetdedir. Kasîdede ve gazelde tarz-ı hâssı olup kimesneye teşebbüh etmemiştir. Leylâ vü Mecnûn mesnevîsi dillerde destândır.",
      "anahtar_tespit": "Kendine has tarz (üslûb-ı mahsus), kimseyi taklit etmeyen özgün lirik dahi."
    },
    {
      "yazar": "Kınalızâde Hasan Çelebi",
      "eser": "Tezkiretü'ş-Şu'arâ (1586)",
      "onemi": "Kapsamlı ve belgesel nitelikte tezkire.",
      "metin": "Mevlânâ Fuzûlî... Mertebe-i nazmı a'lâ-yı a'lâda ve pâyebân-ı fazlı sipihr-i a'zamdadır. Gazeliyâtında olan te'sîr-i cân-güdâz u sûz-ı aşk hiçbir kimsede müşâhede olunmamıştır. Şi'r-i bî-ilmden ictinâb edip her beytini bir ilm-i şerîf ile tezyîn eylemiştir.",
      "anahtar_tespit": "İlimsiz şiirden sakınması ve her beytini yüksek ilimlerle süslemesi."
    },
    {
      "yazar": "Sehî Bey",
      "eser": "Heşt Behişt (1538)",
      "onemi": "Osmanlı sahasındaki ilk şuara tezkiresi.",
      "metin": "Acem ve Türk iklîminde nâmı bülend bir üstâddır. Eş'ârı gâyetde latîf ve kelimâtı pâk ü zarîftir. Şiir meclislerinin gülü ve âşıklar bezminin şem'idir.",
      "anahtar_tespit": "Türk ve Doğu edebiyatında erken dönemde kabul edilen hürmet ve şöhret."
    }
  ]
};

// ==========================================
// POETİK ANALİZ VE YARDIMCI FONKSİYONLAR
// ==========================================

function normText(s) {
  if (!s) return "";
  return s.toLowerCase()
    .replace(/[âîûÂÎÛ]/g, (c) => ({ "â": "a", "î": "i", "û": "u", "Â": "a", "Î": "i", "Û": "u" }[c] || c))
    .replace(/İ/g, "i").replace(/I/g, "ı");
}

function hecele(kelime) {
  const unluler = new Set(["a","e","ı","i","o","ö","u","ü","A","E","I","İ","O","Ö","U","Ü","â","î","û","Â","Î","Û"]);
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
      const splitPoint = consCount <= 1 ? vCurr + 1 : vNext - 1;
      heceler.push(kelime.slice(start, splitPoint));
      start = splitPoint;
    }
  }
  return heceler;
}

function aruzTahmin(misra) {
  const temiz = misra.replace(/[^\w\sâîûÂÎÛ']/g, "").trim();
  const kelimeler = temiz.split(/\s+/);
  if (!kelimeler || kelimeler.length === 0 || !kelimeler[0]) return null;

  const unluler = new Set(["a","e","ı","i","o","ö","u","ü","A","E","I","İ","O","Ö","U","Ü","â","î","û","Â","Î","Û"]);
  const uzunUnluler = new Set(["â","î","û","Â","Î","Û"]);

  const heceSembolleri = [];
  const hecelerListesi = [];

  kelimeler.forEach((kelime, kIdx) => {
    const wordHeceler = hecele(kelime);
    wordHeceler.forEach((hece, hIdx) => {
      const isLastInLine = (kIdx === kelimeler.length - 1 && hIdx === wordHeceler.length - 1);
      let sembol = "-";
      if (isLastInLine) {
        sembol = "-";
      } else if ([...hece].some(c => uzunUnluler.has(c))) {
        sembol = "-";
      } else if (unluler.has(hece[hece.length - 1])) {
        sembol = ".";
      } else {
        sembol = "-";
      }
      heceSembolleri.push(sembol);
      hecelerListesi.push(hece);
    });
  });

  let enIyi = null;
  let enYuksek = -1;

  for (const kalip of (CORPUS.aruz_kaliplari || [])) {
    const sembolStr = kalip.sembol.replace(/\s*\/\s*/g, "").replace(/\s+/g, "");
    const heceStr = heceSembolleri.join("");
    const minLen = Math.min(sembolStr.length, heceStr.length);
    if (minLen === 0) continue;

    let match = 0;
    for (let i = 0; i < minLen; i++) {
      if (sembolStr[i] === heceStr[i]) match++;
    }
    const score = (match / Math.max(sembolStr.length, heceStr.length)) * 100;
    if (score > enYuksek) {
      enYuksek = score;
      enIyi = kalip;
    }
  }

  return {
    misra,
    heceler: hecelerListesi,
    semboller: heceSembolleri,
    desen: heceSembolleri.join(" "),
    kalip: enIyi ? enIyi.kalip : "Bilinmiyor",
    ad: enIyi ? enIyi.ad : "Serbest",
    oran: enIyi ? enYuksek.toFixed(1) : "0",
    kalipObj: enIyi
  };
}

function taktiEt(misra) {
  const aruz = aruzTahmin(misra);
  if (!aruz || !aruz.heceler.length) return null;

  const kalipStr = aruz.kalip;
  const cuzAdlari = kalipStr.split("/").map(s => s.trim());
  let cuzDesenleri = [];
  if (aruz.kalipObj && aruz.kalipObj.sembol) {
    cuzDesenleri = aruz.kalipObj.sembol.split("/").map(s => s.trim());
  } else {
    cuzDesenleri = cuzAdlari.map(() => ". - - -");
  }

  const cuzler = [];
  let currIdx = 0;

  cuzAdlari.forEach((cuzAd, i) => {
    const desen = cuzDesenleri[i] || "";
    const count = desen.replace(/\s+/g, "").length;
    const cuzHeceler = aruz.heceler.slice(currIdx, currIdx + count);
    const cuzSemboller = aruz.semboller.slice(currIdx, currIdx + count);
    currIdx += count;

    cuzler.push({
      tefile: cuzAd,
      hedefDesen: desen,
      heceler: cuzHeceler,
      metin: cuzHeceler.join("-"),
      semboller: cuzSemboller
    });
  });

  if (currIdx < aruz.heceler.length && cuzler.length > 0) {
    const kalan = aruz.heceler.slice(currIdx);
    cuzler[cuzler.length - 1].heceler.push(...kalan);
    cuzler[cuzler.length - 1].metin = cuzler[cuzler.length - 1].heceler.join("-");
  }

  return {
    ...aruz,
    cuzler,
    taktiMetni: cuzler.map(c => c.metin).filter(Boolean).join(" / ")
  };
}

function kafiyeRedifAnaliz(misra1, misra2) {
  const t1 = misra1.replace(/[^\w\sâîûÂÎÛ']/g, "").trim();
  const t2 = misra2.replace(/[^\w\sâîûÂÎÛ']/g, "").trim();
  const k1 = t1.split(/\s+/);
  const k2 = t2.split(/\s+/);
  if (!k1.length || !k2.length || !k1[0] || !k2[0]) return null;

  let idx1 = k1.length - 1;
  let idx2 = k2.length - 1;
  const ortakKelimeler = [];
  while (idx1 >= 0 && idx2 >= 0 && k1[idx1].toLowerCase() === k2[idx2].toLowerCase()) {
    ortakKelimeler.unshift(k1[idx1]);
    idx1--;
    idx2--;
  }

  const wordRedif = ortakKelimeler.join(" ");
  const w1 = idx1 >= 0 ? k1[idx1].toLowerCase() : "";
  const w2 = idx2 >= 0 ? k2[idx2].toLowerCase() : "";

  const suffixArr = [];
  let p1 = w1.length - 1;
  let p2 = w2.length - 1;
  while (p1 >= 0 && p2 >= 0 && w1[p1] === w2[p2]) {
    suffixArr.unshift(w1[p1]);
    p1--;
    p2--;
  }
  const suffixStr = suffixArr.join("");

  const ekRedifler = [
    "ındadır", "indedir", "ımdadır", "imdedir", "ından", "inden", "ında", "inde",
    "mazmı", "mezmi", "sanmı", "senmi", "maz mı", "mez mi", "san mı", "sen mi",
    "durur", "dürür", "iken", "içün", "ler", "lar", "den", "dan", "ten", "tan",
    "tek", "dür", "dir", "dur", "dır", "mı", "mi", "mu", "mü", "maz", "mez"
  ];
  ekRedifler.sort((a, b) => b.length - a.length);

  let ekRedif = "";
  let kafiyeSesi = suffixStr;

  if (suffixStr) {
    for (const ek of ekRedifler) {
      if (suffixStr.endsWith(ek) && suffixStr.length > ek.length) {
        ekRedif = ek;
        kafiyeSesi = suffixStr.slice(0, suffixStr.length - ek.length);
        break;
      }
    }
  }

  const redifParts = [];
  if (ekRedif) redifParts.push(ekRedif);
  if (wordRedif) redifParts.push(wordRedif);
  const toplamRedif = redifParts.length ? redifParts.join(" ") : "Yok (Yalın Kafiye)";

  if (wordRedif && !kafiyeSesi && w1 && w2) {
    if (w1[w1.length - 1] === w2[w2.length - 1]) {
      kafiyeSesi = w1[w1.length - 1];
    }
  }

  const uzunUnluler = new Set(["â","î","û","Â","Î","Û"]);
  let sesPuani = kafiyeSesi.length;
  if ([...kafiyeSesi].some(c => uzunUnluler.has(c))) sesPuani += 1;

  let kafiyeTuru = "Yarım Kafiye";
  if (sesPuani === 2) kafiyeTuru = "Tam Kafiye";
  else if (sesPuani >= 3) kafiyeTuru = "Zengin Kafiye";

  return {
    misra1,
    misra2,
    redif: toplamRedif,
    kafiye: kafiyeSesi || "Tespit Edilemedi",
    kafiyeTuru,
    revi: kafiyeSesi ? kafiyeSesi[kafiyeSesi.length - 1] : "-"
  };
}

// ==========================================
// EDEBÎ SANAT ANALİZ MOTORU
// ==========================================

const TEZAT_CIFTLERI = [
  [["can", "ten"], "Can (ruh) ve ten (beden) zıtlığı"],
  [["yâr", "ağyâr", "agyar"], "Yâr (sevgili) ve ağyâr (yabancılar/düşmanlar) zıtlığı"],
  [["vuslat", "hicran", "firkat"], "Vuslat (kavuşma) ve hicran (ayrılık) zıtlığı"],
  [["gece", "gündüz", "şeb", "ruz"], "Gece ve gündüz zıtlığı"],
  [["ağlamak", "gülmek", "giryan", "handan"], "Ağlamak ve gülmek zıtlığı"],
  [["zehir", "şeker", "zehr", "şehd"], "Acı zehir ve tatlı şeker zıtlığı"],
  [["ateş", "su", "od", "âb"], "Ateş (od) ve su (âb) zıtlığı"],
  [["gül", "har", "hâr", "diken"], "Gül ve diken (hâr) zıtlığı"],
  [["bimar", "bîmâr", "sıhhat", "derman", "şifa"], "Hastalık ve sıhhat/derman zıtlığı"],
  [["fakr", "devlet", "gına"], "Fakirlik ve zenginlik/devlet zıtlığı"],
  [["akıl", "akl", "cünun", "cinnet", "şeyda", "divane"], "Akıl ve divanelik/çılgınlık zıtlığı"],
  [["zâhid", "zahid", "rind"], "Kaba sofu (zâhid) ve rind zıtlığı"],
  [["gam", "safâ", "safa"], "Gam ve safâ (huzur/neşe) zıtlığı"],
  [["yanmak", "usanmak"], "Yanmak (hararet) ve usanmak (soğumak) tezatı"],
  [["şâh", "kul", "hüsrevân"], "Şâh ve kul/bende zıtlığı"],
  [["keder", "safâ"], "Keder ve safâ zıtlığı"]
];

const TENASUP_KUMELERI = [
  ["Su ve Gözyaşı Kümesi", ["su", "eşk", "çeşm", "bahr", "derya", "deryâ", "gözyaşı", "seyl", "ırmak", "cûy", "bulanmak", "kûze"]],
  ["Ateş ve Hararet Kümesi", ["ateş", "âteş", "od", "şem'", "şem", "yanmak", "kül", "dûd", "şûle", "tâb", "harâret", "şeb-i hicrân"]],
  ["Gül ve Gülistan Kümesi", ["gül", "bülbül", "diken", "hâr", "bâğ", "çemen", "bostân", "gonca", "gül-berg", "fasl-ı gül", "bağbân"]],
  ["Tabip ve Derman Kümesi", ["tabîb", "tabib", "hekim", "derd", "derdim", "devâ", "dermân", "derman", "bîmâr", "maraz", "şifâ"]],
  ["Meyhane ve Rindlik Kümesi", ["mey", "bâde", "sâkî", "sâkıyâ", "câm", "kadeh", "hum", "harâbât", "mest", "sermest", "pîr-i mugân"]]
];

const HUSNI_TALIL_IPUCLARI = [
  ["odlara su", "Aşk ateşini söndürmek maksadıyla gözyaşı dökülmesi"],
  ["başını daşdan daşa", "Ayağına yüz sürebilmek için suyun taştan taşa baş vurup akması"],
  ["başını taştan taşa", "Ayağına yüz sürebilmek için suyun taştan taşa baş vurup akması"],
  ["hâk-i pây", "Sevgilinin bastığı toprağa erişme arzusu"],
  ["bulanmaz mı", "Akar suların sevgilinin gül yanağını görüp coşup bulanması"],
  ["ayağına yüz sürmek", "Suyun veya rüzgarın sevgilinin ayağına varmak istemesi"],
  ["felekler yandı âhımdan", "Âh ateşi sebebiyle feleklerin tutuşması"],
  ["yüzün görsün safâ bulsun", "Ayrılık ızdırabının sevgilinin cemaliyle dinmesi"],
  ["bağbân", "Bahçıvanın bir tek gül yaprağı için çukurlara su akıtması"]
];

const TESBIH_IPUCLARI = [
  [" tek ", "Gibi / benzeme edatı (şem' tek, mecnun tek)"],
  ["veş", "Gibi edatı (şem'-veş, gonca-veş)"],
  ["çü ", "Gibi / sanki benzetme edatı"],
  ["misâl", "Örnek / benzer edatı"],
  ["benzer", "Benzeme fiili"],
  ["serv-i", "Servi gibi uzun ve düzgün boy (Teşbih-i Belîğ)"],
  ["murg-ı dil", "Gönül kuşu (Teşbih-i Belîğ)"],
  ["meh-likā", "Ay yüzlü sevgili (Teşbih-i Belîğ)"],
  ["tîr-i gamze", "Gamze oku (Teşbih / İstiare)"],
  ["dâm-ı zülf", "Saç tuzağı (Teşbih-i Belîğ)"],
  ["perî-rû", "Peri yüzlü güzel (Teşbih-i Belîğ)"]
];

const TESHIS_IPUCLARI = [
  ["su", ["gezer", "akar", "başını daşdan", "başını taştan", "ağlar", "usanmaz", "seyl"], "Suya canlı gibi gezme veya ağlama yüklenmiştir."],
  ["felek", ["yandı", "döner", "bî-rahm", "rehm kılmaz", "sitem"], "Feleğe (kadere) acımasızlık ve can yakıcılık yüklenmiştir."],
  ["gönül", ["deli", "ey gönül", "ta'n eyleme", "divâne", "usanmaz"], "Gönül bir insan gibi muhatap alınıp uyarılmıştır."],
  ["baht", ["uyanmaz mı", "karâ baht", "uyur"], "Bahta (talihe) uyuma ve uyanma özelliği atfedilmiştir."],
  ["sabâ", ["sorma", "ey sabâ", "esme", "peygâm"], "Sabah rüzgarı haberci ve dert ortağı bir canlı kılınmıştır."],
  ["şem'", ["yanar", "ağlar", "erir", "şem' tek", "yanmaz mı"], "Mum aşık gibi ağlayan ve eriyen bir varlık kılınmıştır."]
];

const TECAHULI_ARIF_IPUCLARI = [
  "usanmaz mı", "yanmaz mı", "uyanmaz mı", "bilmez mi", "sanmaz mı",
  "bilmem", "aceb", "olmaya kim", "utanmaz mı", "ayb kılman", "halkı bîmâr sanır"
];

const ISTIKAK_KUMELERI = [
  [["aşk", "âşık", "ma'şûk", "ışk", "uşşâk"], "Aşk / Âşık / Ma'şûk"],
  [["derd", "dermân"], "Derd / Dermân türevleri"],
  [["gam", "gam-hâr", "gam-nâk", "gamgîn"], "Gam kökünden türeyenler"],
  [["vefâ", "bî-vefâ", "vefâdâr"], "Vefâ ve türevleri"],
  [["cefâ", "bî-cefâ", "cefâ-kâr", "cefa"], "Cefâ ve türevleri"],
  [["hüküm", "hâkim", "hikmet", "hakîm"], "H-K-M kökünden türeyenler"],
  [["şevk", "müştâk", "iştiyâk"], "Şevk / Müştâk türevleri"],
  [["mürüvvet", "mürüvvetsiz"], "Mürüvvet ve türevleri"]
];

function edebiSanatAnaliz(metin) {
  const temiz = metin.toLowerCase().replace(/[^\w\sâîûÂÎÛ']/g, " ");
  const kelimeler = new Set(temiz.split(/\s+/).filter(Boolean));
  const rawLower = metin.toLowerCase();
  const bulunanlar = [];

  // 1. Tezat
  for (const [cift, aciklama] of TEZAT_CIFTLERI) {
    const matches = cift.filter(t => [...kelimeler].some(w => normText(w) === normText(t) || (t.length >= 3 && normText(w).startsWith(normText(t)))));
    if (matches.length >= 2) {
      bulunanlar.push({ sanat: "Tezat", kelimeler: matches, aciklama });
    }
  }

  // 2. Tenasüp
  for (const [kumeAdi, kumeKelimeler] of TENASUP_KUMELERI) {
    const matches = kumeKelimeler.filter(t => [...kelimeler].some(w => normText(w) === normText(t) || (t.length >= 3 && normText(w).startsWith(normText(t)))));
    if (matches.length >= 2) {
      bulunanlar.push({ sanat: "Tenasüp", kume: kumeAdi, kelimeler: matches, aciklama: `${kumeAdi} bağlamında uyumlu sözcükler kullanılmıştır.` });
    }
  }

  // 3. İstifham
  const istifhamEdatlari = ["mı", "mi", "mu", "mü", "nedür", "nedir", "kim", "kanda", "nice", "niçin", "hangi", "aceb"];
  const bulunanSorular = istifhamEdatlari.filter(s => ` ${temiz} `.includes(` ${s} `));
  if (metin.includes("?") || bulunanSorular.length) {
    bulunanlar.push({ sanat: "İstifham", kelimeler: bulunanSorular.length ? bulunanSorular : ["Soru Cümlesi"], aciklama: "Cevap beklemeden şairane hayret veya sitemle soru sorma sanatı." });
  }

  // 4. Nidâ
  const nidaEdatlari = ["ey", "yâ", "ayâ", "heyhât", "yâ rab", "habîbim", "sâkıyâ", "efendim", "sultânım"];
  const bulunanNidalar = nidaEdatlari.filter(n => rawLower.includes(n));
  if (bulunanNidalar.length) {
    bulunanlar.push({ sanat: "Nidâ", kelimeler: bulunanNidalar, aciklama: "Coşkulu sesleniş ve hitap sanatı." });
  }

  // 5. Tecrid
  if (rawLower.includes("fuzûlî") || rawLower.includes("fuzuli")) {
    bulunanlar.push({ sanat: "Tecrid", kelimeler: ["Fuzûlî"], aciklama: "Şairin kendi benliğinden soyunarak mahlasına seslenmesi." });
  }

  // 6. Mübalağa
  const mubalagaKaliplari = ["felekler yandı", "taş deler", "âlem tutuştu", "kan döker", "halkı uyârır", "efgānım", "bî-hadd", "cân lebe"];
  const bulunanMubalaga = mubalagaKaliplari.filter(m => rawLower.includes(m));
  if (bulunanMubalaga.length) {
    bulunanlar.push({ sanat: "Mübalağa", kelimeler: bulunanMubalaga, aciklama: "Aşk ve ızdırabı akıl sınırlarını aşacak derecede büyütme sanatı." });
  }

  // 7. Hüsn-i Ta'lîl
  for (const [ipucu, aciklama] of HUSNI_TALIL_IPUCLARI) {
    if (rawLower.includes(ipucu)) {
      bulunanlar.push({ sanat: "Hüsn-i Ta'lîl", kelimeler: [ipucu], aciklama: `Olayı hayalî ve şiirsel güzel bir sebebe bağlama (${aciklama}).` });
    }
  }

  // 8. Teşbih / Teşbih-i Belîğ
  for (const [edat, aciklama] of TESBIH_IPUCLARI) {
    if (rawLower.includes(edat)) {
      bulunanlar.push({ sanat: "Teşbih / Teşbih-i Belîğ", kelimeler: [edat.trim()], aciklama });
    }
  }

  // 9. Teşhis & İntak
  for (const [unsur, eylemler, aciklama] of TESHIS_IPUCLARI) {
    if (rawLower.includes(unsur)) {
      const eslesenEylemler = eylemler.filter(e => rawLower.includes(e));
      if (eslesenEylemler.length) {
        bulunanlar.push({ sanat: "Teşhis", kelimeler: [unsur, ...eslesenEylemler], aciklama });
      }
    }
  }

  // 10. Tecâhül-i Ârif
  const bulunanTecahul = TECAHULI_ARIF_IPUCLARI.filter(t => rawLower.includes(t));
  if (bulunanTecahul.length) {
    bulunanlar.push({ sanat: "Tecâhül-i Ârif", kelimeler: bulunanTecahul, aciklama: "Bildiği bir hakikati lirik nükte oluşturmak maksadıyla bilmezden gelme sanatı." });
  }

  // 11. İştikak
  for (const [grup, aciklama] of ISTIKAK_KUMELERI) {
    const matches = grup.filter(t => [...kelimeler].some(w => normText(w) === normText(t) || (t.length >= 3 && normText(w).startsWith(normText(t)))));
    if (matches.length >= 2) {
      bulunanlar.push({ sanat: "İştikak", kelimeler: matches, aciklama: `${aciklama} (Aynı sülasi kökten türeyiş)` });
    }
  }

  return {
    metin,
    tespitSayisi: bulunanlar.length,
    sanatlar: bulunanlar
  };
}

// ==========================================
// MİSTİK NEY & SÜKÛN SES SENTEZLEYİCİ (WEB AUDIO API)
// ==========================================

let neyAudioCtx = null;
let neyGainNode = null;
let isNeyPlaying = false;
let neyOscillators = [];

function toggleNeyAudio() {
  const btn = document.getElementById("btnNeySound");
  if (!isNeyPlaying) {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      neyAudioCtx = new AudioCtx();
      neyGainNode = neyAudioCtx.createGain();
      neyGainNode.gain.setValueAtTime(0.001, neyAudioCtx.currentTime);
      neyGainNode.gain.exponentialRampToValueAtTime(0.12, neyAudioCtx.currentTime + 3);

      const freqs = [73.41, 110.0, 146.83, 220.0];
      neyOscillators = freqs.map((f, i) => {
        const osc = neyAudioCtx.createOscillator();
        osc.type = i === 0 ? "sine" : (i === 1 ? "triangle" : "sine");
        osc.frequency.setValueAtTime(f, neyAudioCtx.currentTime);

        const lfo = neyAudioCtx.createOscillator();
        const lfoGain = neyAudioCtx.createGain();
        lfo.frequency.setValueAtTime(4.2 + i * 0.4, neyAudioCtx.currentTime);
        lfoGain.gain.setValueAtTime(0.6, neyAudioCtx.currentTime);
        lfo.connect(lfoGain);
        lfoGain.connect(osc.frequency);
        lfo.start();

        const filter = neyAudioCtx.createBiquadFilter();
        filter.type = "lowpass";
        filter.frequency.setValueAtTime(480, neyAudioCtx.currentTime);

        osc.connect(filter);
        filter.connect(neyGainNode);
        osc.start();
        return osc;
      });

      neyGainNode.connect(neyAudioCtx.destination);
      isNeyPlaying = true;
      if (btn) {
        btn.classList.add("playing");
        btn.innerHTML = "⏸️ Ney Çalıyor...";
      }
      showToast("🎶 Mistik Ney & Sükûn Modu Açıldı");
    } catch (e) {
      console.warn("Web Audio başlatılamadı:", e);
    }
  } else {
    if (neyGainNode && neyAudioCtx) {
      neyGainNode.gain.exponentialRampToValueAtTime(0.0001, neyAudioCtx.currentTime + 1.2);
      setTimeout(() => {
        neyOscillators.forEach(o => { try { o.stop(); } catch(e){} });
        if (neyAudioCtx) { neyAudioCtx.close(); }
        neyAudioCtx = null;
      }, 1300);
    }
    isNeyPlaying = false;
    if (btn) {
      btn.classList.remove("playing");
      btn.innerHTML = "🎶 Ney & Sükûn";
    }
    showToast("Ney sesi durduruldu.");
  }
}

const btnNey = document.getElementById("btnNeySound");
if (btnNey) {
  btnNey.addEventListener("click", toggleNeyAudio);
}

// ==========================================
// HAT & TEZHİP BEYİT KARTI GENERATOR (CANVAS TO PNG)
// ==========================================

function generateCoupletCard(coupletObj) {
  const canvas = document.getElementById("cardCanvas") || document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 700;
  const ctx = canvas.getContext("2d");

  // Arka Plan
  const bgGrad = ctx.createRadialGradient(600, 350, 60, 600, 350, 650);
  bgGrad.addColorStop(0, "#181e2b");
  bgGrad.addColorStop(1, "#0a0c10");
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, 1200, 700);

  // Çerçeveler
  ctx.strokeStyle = "#d4a853";
  ctx.lineWidth = 4;
  ctx.strokeRect(30, 30, 1140, 640);

  ctx.strokeStyle = "#8b6f34";
  ctx.lineWidth = 1.5;
  ctx.strokeRect(44, 44, 1112, 612);

  // Köşe Motifleri
  const corners = [[56, 56], [1144, 56], [56, 644], [1144, 644]];
  ctx.fillStyle = "#f5d77f";
  ctx.font = "20px Cinzel, serif";
  ctx.textAlign = "center";
  corners.forEach(([cx, cy]) => {
    ctx.fillText("✦", cx, cy + 6);
  });

  // Üst Başlık
  ctx.fillStyle = "#d4a853";
  ctx.font = "700 24px 'Cinzel', serif";
  ctx.fillText("فصل فضولی • FASL-I FUZÛLÎ", 600, 95);

  ctx.font = "16px 'Plus Jakarta Sans', sans-serif";
  ctx.fillStyle = "#94a3b8";
  ctx.fillText("DÎVÂN-I MOLLA FUZÛLÎ (1483 - 1556)", 600, 125);

  // Ayırıcı Altın Hat
  ctx.strokeStyle = "rgba(212, 168, 83, 0.4)";
  ctx.beginPath();
  ctx.moveTo(360, 145);
  ctx.lineTo(840, 145);
  ctx.stroke();

  // Beyit Metni
  const lines = coupletObj.metin.split("/").map(s => s.trim());
  ctx.fillStyle = "#fef08a";
  ctx.font = "bold 32px 'Amiri', 'Cinzel', serif";
  if (lines.length >= 2) {
    ctx.fillText(`"${lines[0]}"`, 600, 240);
    ctx.fillText(`"${lines[1]}"`, 600, 300);
  } else {
    ctx.fillText(`"${coupletObj.metin}"`, 600, 270);
  }

  // Şerh / Günümüz Türkçesi
  ctx.font = "italic 19px 'Amiri', serif";
  ctx.fillStyle = "#cbd5e1";
  const anlam = coupletObj.anlam || coupletObj.sadelesmis || "";
  if (anlam.length > 80) {
    ctx.fillText(anlam.slice(0, 75) + "...", 600, 410);
    ctx.fillText(anlam.slice(75, 150), 600, 440);
  } else {
    ctx.fillText(anlam, 600, 420);
  }

  // Vezin & Kaynak
  ctx.font = "15px 'Plus Jakarta Sans', sans-serif";
  ctx.fillStyle = "#d4a853";
  if (coupletObj.vezin) {
    ctx.fillText(`Vezin: ${coupletObj.vezin}`, 600, 520);
  }
  ctx.fillStyle = "#e2e8f0";
  ctx.font = "600 17px 'Cinzel', serif";
  ctx.fillText(`— ${coupletObj.kaynak || "Fuzûlî Külliyâtı"}`, 600, 560);

  // Mühr-i Fuzûlî
  ctx.fillStyle = "rgba(212, 168, 83, 0.25)";
  ctx.beginPath();
  ctx.arc(600, 620, 22, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#d4a853";
  ctx.font = "14px 'Cinzel', serif";
  ctx.fillText("فضولی", 600, 625);

  // İndir
  const link = document.createElement("a");
  link.download = `Fuzuli_Beyit_${Date.now()}.png`;
  link.href = canvas.toDataURL("image/png");
  link.click();
  showToast("🎨 Beyit Kartı (PNG) indirildi!");
}

// ==========================================
// TOAST BİLDİRİMİ
// ==========================================
function showToast(msg) {
  let toast = document.getElementById("fuzuliToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "fuzuliToast";
    toast.className = "toast-notification";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2600);
}

function copyTextToClipboard(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast("📋 Panoya kopyalandı!");
  }).catch(() => {
    showToast("Metin kopyalandı.");
  });
}

// ==========================================
// TEMA GEÇİŞİ (DARK / LIGHT)
// ==========================================
const themeToggle = document.getElementById("themeToggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("theme-light");
    document.body.classList.toggle("theme-dark");
  });
}

// ==========================================
// ANA SEKME YÖNETİMİ
// ==========================================
const navButtons = document.querySelectorAll(".nav-btn");
const tabPanes = document.querySelectorAll(".tab-pane");

navButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    navButtons.forEach(b => b.classList.remove("active"));
    tabPanes.forEach(p => p.classList.remove("active"));

    btn.classList.add("active");
    const targetTab = btn.getAttribute("data-tab");
    const pane = document.getElementById(`tab-${targetTab}`);
    if (pane) pane.classList.add("active");
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
let sonCekilenFal = null;

function rastgeleFalCek() {
  const havuz = [];

  (CORPUS.gazeller || []).forEach(g => {
    (g.beyitler || []).forEach(b => {
      havuz.push({
        tur: "Gazel Beyti",
        kaynak: `${g.baslik} (Beyit #${b.no})`,
        vezin: g.vezin || "Bilinmiyor",
        metin: b.turkce,
        anlam: b.sadelesmis,
        sanatlar: b.sanatlar || []
      });
    });
  });

  (CORPUS.su_kasidesi?.beyitler || []).forEach(b => {
    havuz.push({
      tur: "Su Kasîdesi Beyti",
      kaynak: `Su Kasîdesi #${b.no}`,
      vezin: CORPUS.su_kasidesi.vezin || "Fâ'ilâtün / Fâ'ilâtün / Fâ'ilâtün / Fâ'ilün",
      metin: b.metin,
      anlam: b.anlam,
      sanatlar: b.sanatlar || ["Na't-ı Şerif"]
    });
  });

  (CORPUS.hikmetli_sozler || []).forEach(s => {
    havuz.push({
      tur: "Hikmetli Kelâm",
      kaynak: s.kaynak,
      vezin: "Hikemî / İrşad",
      metin: s.soz,
      anlam: s.anlam,
      sanatlar: ["Hikmet"]
    });
  });

  (CORPUS.rubailer_ve_kitalar || []).forEach(r => {
    havuz.push({
      tur: r.tur || "Rübâi",
      kaynak: `${r.tur || "Rübâi"} #${r.no}`,
      vezin: r.vezin || "",
      metin: r.metin,
      anlam: r.anlam,
      sanatlar: ["Hikmet", "Tasavvuf"]
    });
  });

  if (!havuz.length) return;
  const secim = havuz[Math.floor(Math.random() * havuz.length)];
  sonCekilenFal = secim;

  falTur.textContent = secim.tur;
  falMetin.textContent = `"${secim.metin}"`;
  falKaynak.textContent = `— ${secim.kaynak}`;
  falVezin.innerHTML = `<strong>Vezin:</strong> ${secim.vezin}`;
  falSanatlar.innerHTML = `<strong>Sanatlar:</strong> ${secim.sanatlar.join(", ")}`;
  falAnlam.textContent = secim.anlam;

  falSonuc.classList.remove("hidden");
  falSonuc.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

if (btnFalCek) btnFalCek.addEventListener("click", rastgeleFalCek);

const btnCopyFal = document.getElementById("btnCopyFal");
if (btnCopyFal) {
  btnCopyFal.addEventListener("click", () => {
    const text = `${falMetin.textContent}\n${falKaynak.textContent}\nAnlamı: ${falAnlam.textContent}`;
    copyTextToClipboard(text);
  });
}

const btnDownloadCard = document.getElementById("btnDownloadCard");
if (btnDownloadCard) {
  btnDownloadCard.addEventListener("click", () => {
    if (sonCekilenFal) {
      generateCoupletCard(sonCekilenFal);
    } else {
      showToast("Önce bir fal çekiniz.");
    }
  });
}

// ==========================================
// 2. KÜLLİYÂT OKUYUCU
// ==========================================
const kulliyatSubBtns = document.querySelectorAll(".sub-nav-btn");
const kulliyatContent = document.getElementById("kulliyatContent");

kulliyatSubBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    kulliyatSubBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderKulliyat(btn.getAttribute("data-sub"));
  });
});

function renderKulliyat(category = "gazeller") {
  if (!kulliyatContent) return;
  kulliyatContent.innerHTML = "";

  if (category === "gazeller") {
    const container = document.createElement("div");
    container.className = "gazeller-list";

    (CORPUS.gazeller || []).forEach(g => {
      const card = document.createElement("div");
      card.className = "eser-card";
      card.innerHTML = `
        <div class="eser-header">
          <h3>${g.baslik}</h3>
          <span class="eser-badge">${g.tema || "Aşk & İrfan"}</span>
        </div>
        <div class="eser-meta">
          <span><strong>Vezin:</strong> ${g.vezin}</span>
          <span><strong>Redif:</strong> ${g.redif || "Yok"}</span>
          <span><strong>Toplam Beyit:</strong> ${g.beyitler?.length || 0}</span>
        </div>
        <div class="beyitler-accordion">
          ${g.beyitler.map(b => {
            const isMusammat = (g.id === "beni-candan-usandirdi" && (b.no === 1 || b.no === 3));
            return `
            <div class="beyit-row">
              <div class="beyit-no">#${b.no}</div>
              <div class="beyit-body">
                <p class="beyit-arabic-tr">
                  ${b.turkce}
                  ${isMusammat ? '<span class="musammat-badge">✨ Musammat (İç Kafiyeli)</span>' : ''}
                </p>
                <p class="beyit-meaning">${b.sadelesmis}</p>
                <div class="beyit-arts-wrap">
                  ${b.sanatlar.map(s => `<span class="art-pill">${s}</span>`).join("")}
                  <button class="btn-copy-mini btn-card-mini" data-metin="${encodeURIComponent(b.turkce)}" data-anlam="${encodeURIComponent(b.sadelesmis)}" data-kaynak="${encodeURIComponent(g.baslik + ' #' + b.no)}" data-vezin="${encodeURIComponent(g.vezin)}" title="Kart Olarak İndir">🎨 Kart</button>
                  <button class="btn-copy-mini" onclick="copyTextToClipboard('${b.turkce.replace(/'/g, "\\'")}')" title="Mısrayı Kopyala">📋 Kopyala</button>
                </div>
              </div>
            </div>
            `;
          }).join("")}
        </div>
      `;
      container.appendChild(card);
    });
    kulliyatContent.appendChild(container);

    container.querySelectorAll(".btn-card-mini").forEach(b => {
      b.addEventListener("click", () => {
        generateCoupletCard({
          metin: decodeURIComponent(b.dataset.metin),
          anlam: decodeURIComponent(b.dataset.anlam),
          kaynak: decodeURIComponent(b.dataset.kaynak),
          vezin: decodeURIComponent(b.dataset.vezin)
        });
      });
    });
  } else if (category === "su-kasidesi") {
    const sk = CORPUS.su_kasidesi || {};
    const wrap = document.createElement("div");
    wrap.className = "eser-card";
    wrap.innerHTML = `
      <div class="eser-header">
        <h3>${sk.baslik}</h3>
        <span class="eser-badge">Na't-ı Şerîf</span>
      </div>
      <p style="color: var(--text-secondary); margin: 8px 0 16px 0;">${sk.aciklama || ""}</p>
      <div class="eser-meta">
        <span><strong>Vezin:</strong> ${sk.vezin}</span>
        <span><strong>Redif:</strong> ${sk.redif}</span>
        <span><strong>Toplam:</strong> 32 Beyit (Eksiksiz)</span>
      </div>
      <div class="beyitler-accordion">
        ${(sk.beyitler || []).map(b => `
          <div class="beyit-row">
            <div class="beyit-no">#${b.no}</div>
            <div class="beyit-body">
              <p class="beyit-arabic-tr">${b.metin}</p>
              <p class="beyit-meaning">${b.anlam}</p>
              <div class="beyit-arts-wrap">
                ${(b.sanatlar || []).map(s => `<span class="art-pill">${s}</span>`).join("")}
                <button class="btn-copy-mini btn-card-mini" data-metin="${encodeURIComponent(b.metin)}" data-anlam="${encodeURIComponent(b.anlam)}" data-kaynak="${encodeURIComponent('Su Kasîdesi #' + b.no)}" data-vezin="${encodeURIComponent(sk.vezin)}" title="Kart Olarak İndir">🎨 Kart</button>
                <button class="btn-copy-mini" onclick="copyTextToClipboard('${b.metin.replace(/'/g, "\\'")}')">📋 Kopyala</button>
              </div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
    kulliyatContent.appendChild(wrap);

    wrap.querySelectorAll(".btn-card-mini").forEach(b => {
      b.addEventListener("click", () => {
        generateCoupletCard({
          metin: decodeURIComponent(b.dataset.metin),
          anlam: decodeURIComponent(b.dataset.anlam),
          kaynak: decodeURIComponent(b.dataset.kaynak),
          vezin: decodeURIComponent(b.dataset.vezin)
        });
      });
    });
  } else if (category === "mesneviler") {
    const container = document.createElement("div");
    (CORPUS.mesneviler || []).forEach(m => {
      const card = document.createElement("div");
      card.className = "eser-card";
      card.innerHTML = `
        <div class="eser-header">
          <h3>${m.baslik}</h3>
          <span class="eser-badge">${m.dil}</span>
        </div>
        <p style="color: var(--text-secondary); margin: 8px 0;">${m.konu}</p>
        <div class="eser-meta">
          <span><strong>Vezin:</strong> ${m.vezin}</span>
          <span><strong>Beyit Sayısı:</strong> ${m.beyit_sayisi}</span>
        </div>
        <div class="beyitler-accordion">
          ${(m.pasajlar || []).map(p => `
            <div class="beyit-row">
              <div class="beyit-body" style="width: 100%;">
                <h4 style="color: var(--gold-light); margin-bottom: 6px;">${p.baslik}</h4>
                <p class="beyit-arabic-tr">${p.metin}</p>
                <p class="beyit-meaning">${p.anlam}</p>
              </div>
            </div>
          `).join("")}
        </div>
      `;
      container.appendChild(card);
    });
    kulliyatContent.appendChild(container);
  } else if (category === "mensur") {
    const container = document.createElement("div");
    (CORPUS.mensur_eserler || []).forEach(me => {
      const card = document.createElement("div");
      card.className = "eser-card";
      card.innerHTML = `
        <div class="eser-header">
          <h3>${me.baslik}</h3>
          <span class="eser-badge">${me.tur}</span>
        </div>
        <p style="color: var(--text-secondary); margin: 8px 0;">${me.ozet}</p>
        <div class="tezkire-quote">${me.metin}</div>
      `;
      container.appendChild(card);
    });
    kulliyatContent.appendChild(container);
  } else if (category === "rubailer") {
    const container = document.createElement("div");
    container.className = "gazeller-list";
    (CORPUS.rubailer_ve_kitalar || []).forEach(r => {
      const card = document.createElement("div");
      card.className = "eser-card";
      card.innerHTML = `
        <div class="eser-header">
          <h3>${r.tur} #${r.no}</h3>
          <span class="eser-badge">${r.vezin}</span>
        </div>
        <div class="tezkire-quote">${r.metin.replace(/\n/g, "<br>")}</div>
        <p class="beyit-meaning">${r.anlam}</p>
      `;
      container.appendChild(card);
    });
    kulliyatContent.appendChild(container);
  }
}

renderKulliyat("gazeller");

// ==========================================
// 3. CANLI ARAMA MOTORU
// ==========================================
const searchInput = document.getElementById("searchInput");
const searchCount = document.getElementById("searchCount");
const searchResults = document.getElementById("searchResults");

if (searchInput) {
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.trim();
    if (!query) {
      searchCount.textContent = "Aramaya başlamak için bir kelime yazınız.";
      searchResults.innerHTML = "";
      return;
    }

    const qNorm = normText(query);
    const sonuclar = [];

    // Gazeller
    (CORPUS.gazeller || []).forEach(g => {
      (g.beyitler || []).forEach(b => {
        if (normText(b.turkce).includes(qNorm) || normText(b.sadelesmis).includes(qNorm)) {
          sonuclar.push({
            tur: "Gazel Beyti",
            kaynak: `${g.baslik} (Beyit #${b.no})`,
            metin: b.turkce,
            anlam: b.sadelesmis
          });
        }
      });
    });

    // Su Kasidesi
    (CORPUS.su_kasidesi?.beyitler || []).forEach(b => {
      if (normText(b.metin).includes(qNorm) || normText(b.anlam).includes(qNorm)) {
        sonuclar.push({
          tur: "Su Kasîdesi",
          kaynak: `Su Kasîdesi #${b.no}`,
          metin: b.metin,
          anlam: b.anlam
        });
      }
    });

    // Lügat
    for (const [kavram, aciklama] of Object.entries(CORPUS.lugat || {})) {
      if (normText(kavram).includes(qNorm) || normText(aciklama).includes(qNorm)) {
        sonuclar.push({
          tur: "Dîvân Lügati",
          kaynak: `Kavram: ${kavram}`,
          metin: kavram,
          anlam: aciklama
        });
      }
    }

    // Tezkireler
    (CORPUS.tezkireler || []).forEach(t => {
      if (normText(t.metin).includes(qNorm) || normText(t.yazar).includes(qNorm) || normText(t.eser).includes(qNorm)) {
        sonuclar.push({
          tur: "Tarihî Tezkire",
          kaynak: `${t.yazar} - ${t.eser}`,
          metin: t.metin,
          anlam: t.anahtar_tespit
        });
      }
    });

    searchCount.textContent = `Toplam ${sonuclar.length} eşleşme bulundu.`;
    searchResults.innerHTML = sonuclar.map(s => `
      <div class="search-result-card">
        <span class="search-tag">${s.tur}</span>
        <h4>${s.kaynak}</h4>
        <p class="search-text">"${s.metin}"</p>
        <p class="search-meaning">${s.anlam}</p>
      </div>
    `).join("");
  });
}

// ==========================================
// 4. ARUZ VEZNİ & TAKTÎ' ÇÖZÜMLEME
// ==========================================
const aruzInput = document.getElementById("aruzInput");
const btnAruzHesapla = document.getElementById("btnAruzHesapla");
const aruzSonuc = document.getElementById("aruzSonuc");

document.querySelectorAll(".btn-preset").forEach(btn => {
  btn.addEventListener("click", () => {
    const text = btn.getAttribute("data-text");
    if (text && aruzInput) {
      aruzInput.value = text;
      hesaplaAruzVeTakti();
    }
  });
});

if (btnAruzHesapla) {
  btnAruzHesapla.addEventListener("click", hesaplaAruzVeTakti);
}

function hesaplaAruzVeTakti() {
  const misra = aruzInput.value.trim();
  if (!misra) {
    showToast("Lütfen bir mısra giriniz.");
    return;
  }

  const takti = taktiEt(misra);
  if (!takti) return;

  aruzSonuc.innerHTML = `
    <div class="aruz-header-result">
      <div>
        <span class="aruz-meter-name">${takti.kalip}</span>
        <span class="aruz-meter-bahr">(${takti.ad})</span>
      </div>
      <div class="aruz-score">Uyum: %${takti.oran}</div>
    </div>

    <div class="takti-display-box">
      <div class="takti-label">Taktî' Bölümlemesi:</div>
      <div class="takti-value">${takti.taktiMetni}</div>
    </div>

    <div class="takti-grid">
      ${takti.cuzler.map(c => `
        <div class="takti-col">
          <div class="takti-cuz-title">${c.tefile}</div>
          <div class="takti-syllables">${c.metin}</div>
          <div class="takti-symbols">${c.semboller.join(" ")}</div>
          <div class="takti-target">${c.hedefDesen}</div>
        </div>
      `).join("")}
    </div>
  `;
  aruzSonuc.classList.remove("hidden");
}

// ==========================================
// 5. KAFİYE VE REDİF ANALİZİ
// ==========================================
const btnKafiyeHesapla = document.getElementById("btnKafiyeHesapla");
const kafiyeM1 = document.getElementById("kafiyeM1");
const kafiyeM2 = document.getElementById("kafiyeM2");
const kafiyeSonuc = document.getElementById("kafiyeSonuc");

if (btnKafiyeHesapla) {
  btnKafiyeHesapla.addEventListener("click", () => {
    const m1 = kafiyeM1.value.trim();
    const m2 = kafiyeM2.value.trim();
    if (!m1 || !m2) {
      showToast("Lütfen her iki mısrayı da giriniz.");
      return;
    }

    const res = kafiyeRedifAnaliz(m1, m2);
    if (!res) return;

    kafiyeSonuc.innerHTML = `
      <div class="kafiye-result-card">
        <div class="kafiye-grid-meta">
          <div class="k-detail-box">
            <span>Mısra Sonu Redif</span>
            <strong>${res.redif}</strong>
          </div>
          <div class="k-detail-box">
            <span>Kafiye Sesi</span>
            <strong style="color: #38bdf8;">${res.kafiye}</strong>
          </div>
          <div class="k-detail-box">
            <span>Kafiye Türü</span>
            <strong>${res.kafiyeTuru}</strong>
          </div>
          <div class="k-detail-box">
            <span>Revî (Kafiye Harfi)</span>
            <strong style="color: #f59e0b;">${res.revi}</strong>
          </div>
        </div>
      </div>
    `;
    kafiyeSonuc.classList.remove("hidden");
  });
}

// ==========================================
// 6. EDEBÎ SANAT TEŞHİS LABORATUVARI
// ==========================================
const sanatInput = document.getElementById("sanatInput");
const btnSanatHesapla = document.getElementById("btnSanatHesapla");
const sanatSonuc = document.getElementById("sanatSonuc");

document.querySelectorAll(".btn-preset-sanat").forEach(btn => {
  btn.addEventListener("click", () => {
    const text = btn.getAttribute("data-text");
    if (text && sanatInput) {
      sanatInput.value = text;
      hesaplaEdebiSanat();
    }
  });
});

if (btnSanatHesapla) {
  btnSanatHesapla.addEventListener("click", hesaplaEdebiSanat);
}

function hesaplaEdebiSanat() {
  const metin = sanatInput ? sanatInput.value.trim() : "";
  if (!metin) {
    showToast("Lütfen incelenecek bir beyit veya mısra giriniz.");
    return;
  }

  const res = edebiSanatAnaliz(metin);
  if (!sanatSonuc) return;

  if (!res.sanatlar.length) {
    sanatSonuc.innerHTML = `
      <div class="sanat-card text-center">
        <p style="color: var(--text-secondary);">Bu beyitte belirgin bir klasik belâgat sanatı otomatik eşleşmedi. Doğrudan şerh metinlerini inceleyebilirsiniz.</p>
      </div>
    `;
  } else {
    sanatSonuc.innerHTML = `
      <div class="sanat-card">
        <div class="sanat-meta">
          <strong style="color: var(--gold-light); font-size: 1.1rem;">Tespit Edilen Edebî Sanatlar (${res.tespitSayisi})</strong>
          <span style="color: var(--text-muted); font-size: 0.9rem;">Otomatik Belâgat Çözümleyicisi</span>
        </div>
        <div class="sanat-pills-wrap">
          ${res.sanatlar.map(s => `
            <div class="sanat-item-card">
              <div class="sanat-item-header">
                <span class="sanat-badge">${s.sanat}</span>
                <span class="sanat-words">[${s.kelimeler ? s.kelimeler.join(", ") : ""}]</span>
              </div>
              <div class="sanat-desc">${s.aciklama}</div>
            </div>
          `).join("")}
        </div>
      </div>
    `;
  }
  sanatSonuc.classList.remove("hidden");
}

// ==========================================
// 7. DÎVÂN LÜGATİ
// ==========================================
const lugatSearch = document.getElementById("lugatSearch");
const lugatGrid = document.getElementById("lugatGrid");

function renderLugat(filter = "") {
  if (!lugatGrid) return;
  lugatGrid.innerHTML = "";
  const fNorm = normText(filter);

  const entries = Object.entries(CORPUS.lugat || {}).sort((a, b) => a[0].localeCompare(b[0], "tr"));
  entries.forEach(([kavram, aciklama]) => {
    if (!fNorm || normText(kavram).includes(fNorm) || normText(aciklama).includes(fNorm)) {
      const card = document.createElement("div");
      card.className = "lugat-card";
      card.innerHTML = `
        <div class="lugat-title">${kavram}</div>
        <div class="lugat-desc">${aciklama}</div>
      `;
      lugatGrid.appendChild(card);
    }
  });
}

if (lugatSearch) {
  lugatSearch.addEventListener("input", (e) => renderLugat(e.target.value.trim()));
}
renderLugat();

// ==========================================
// 8. TARİHÎ ŞU'ARÂ TEZKİRELERİ
// ==========================================
const tezkirelerContainer = document.getElementById("tezkirelerContainer");

function renderTezkireler() {
  if (!tezkirelerContainer) return;
  tezkirelerContainer.innerHTML = (CORPUS.tezkireler || []).map(t => `
    <div class="tezkire-card">
      <div class="tezkire-header">
        <h4>${t.yazar} — ${t.eser}</h4>
        <span class="tezkire-badge">XVI. Yüzyıl Tezkiresi</span>
      </div>
      <div class="tezkire-onem">${t.onemi}</div>
      <div class="tezkire-quote">"${t.metin}"</div>
      <div class="tezkire-tespit"><strong>Anahtar Tahlil:</strong> ${t.anahtar_tespit}</div>
    </div>
  `).join("");
}
renderTezkireler();

// ==========================================
// 9. BİLGİ YARIŞMASI
// ==========================================
let currentQuestions = [];
let currentIndex = 0;
let currentScore = 0;

const btnQuizBaslat = document.getElementById("btnQuizBaslat");
const btnQuizTekrar = document.getElementById("btnQuizTekrar");
const btnQuizNext = document.getElementById("btnQuizNext");
const quizStartView = document.getElementById("quizStartView");
const quizGameView = document.getElementById("quizGameView");
const quizEndView = document.getElementById("quizEndView");
const quizQuestionNumber = document.getElementById("quizQuestionNumber");
const quizScore = document.getElementById("quizScore");
const quizQuestionText = document.getElementById("quizQuestionText");
const quizOptionsList = document.getElementById("quizOptionsList");
const quizFeedback = document.getElementById("quizFeedback");
const quizFeedbackStatus = document.getElementById("quizFeedbackStatus");
const quizFeedbackExplanation = document.getElementById("quizFeedbackExplanation");
const quizProgressFill = document.getElementById("quizProgressFill");

function startQuiz() {
  const allQ = [...(CORPUS.quiz_sorulari || [])];
  for (let i = allQ.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allQ[i], allQ[j]] = [allQ[j], allQ[i]];
  }
  currentQuestions = allQ.slice(0, 5);
  currentIndex = 0;
  currentScore = 0;

  quizStartView.classList.add("hidden");
  quizEndView.classList.add("hidden");
  quizGameView.classList.remove("hidden");

  renderQuizQuestion();
}

function renderQuizQuestion() {
  quizFeedback.classList.add("hidden");
  const q = currentQuestions[currentIndex];
  quizQuestionNumber.textContent = `Soru ${currentIndex + 1} / 5`;
  quizScore.textContent = `Puan: ${currentScore}`;
  quizQuestionText.textContent = q.soru;
  quizProgressFill.style.width = `${(currentIndex + 1) * 20}%`;

  quizOptionsList.innerHTML = "";
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

if (btnQuizNext) {
  btnQuizNext.addEventListener("click", () => {
    currentIndex++;
    if (currentIndex < currentQuestions.length) {
      renderQuizQuestion();
    } else {
      endQuiz();
    }
  });
}

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

if (btnQuizBaslat) btnQuizBaslat.addEventListener("click", startQuiz);
if (btnQuizTekrar) btnQuizTekrar.addEventListener("click", startQuiz);

// ==========================================
// 10. İSTATİSTİK & BİYOGRAFİ
// ==========================================
const statsGrid = document.getElementById("statsGrid");

function renderStats() {
  if (!statsGrid) return;
  const totalGazelBeyit = (CORPUS.gazeller || []).reduce((acc, g) => acc + (g.beyitler?.length || 0), 0);
  const totalSKBeyit = CORPUS.su_kasidesi?.beyitler?.length || 32;
  const totalLugat = Object.keys(CORPUS.lugat || {}).length;
  const totalMesnevi = (CORPUS.mesneviler || []).length;
  const totalMensur = (CORPUS.mensur_eserler || []).length;
  const totalTezkire = (CORPUS.tezkireler || []).length;
  const totalAruz = (CORPUS.aruz_kaliplari || []).length;
  const totalQuiz = (CORPUS.quiz_sorulari || []).length;

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
      <span class="number">${totalAruz}</span>
      <span class="label">Aruz Vezni Kalıbı</span>
    </div>
    <div class="stat-box">
      <span class="number">${totalTezkire}</span>
      <span class="label">Tarihî Tezkire Kaydı</span>
    </div>
    <div class="stat-box">
      <span class="number">${totalQuiz}</span>
      <span class="label">Bilgi Yarışması Sorusu</span>
    </div>
  `;
}

renderStats();
