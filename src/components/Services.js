import React from "react";
import "../styles.css"
import ServiceCard from "./ServiceCard";



class Services extends React.Component {

    state = {
        services: [
            {
                header: "Yabancılar ve Vatandaşlık Hukuku",
                image: "./white-img/foreign.png",
                contentHeader: "Yabancılar ve Vatandaşlık Hukuku",
                contentImage: "./img/passaport_themis.jpg",
                content: `Özdemir Avukatlık Bürosu, alanında yetkin avukatları aracılığı ile yabancıların sınır dışı edilme kararı ve idari gözetim kararlarının iptali başta olmak üzere her türlü vatandaşlık hukukuna ilişkin danışmanlık hizmetini vermektedir.

                Özdemir avukatlık olarak müvekkillerimize bu kapsamda verdiğimiz başlıca hizmetleri şu şekilde sayabiliriz:`,
                contentList: `•	Yabancı ülke vatandaşları hakkında verilen sınır dışı edilme kararının iptali
                •	Yabancılar hakkında veriken idari gözetim kararının kaldırılması
                •	Geri gönderme merkezinde yaşanan her türlü sorunlar
                •	Çalışma İzinlerinin alınması, 
                •	Oturma izni prodesürlerinin takip edilmesi,
                •	Alınan bu izinlerin uzatılması , 
                •	Türk vatandaşlığına geçiş ve vatandaşlığın kaybedilmesi ,
                •	Yabancıların miras edinimine, gayrimenkul alım-satımına dair işlemleri takip etmek
                •	Yabancıların Türkiye’de işyeri ve şirket kuruluşlarının yapılması, işlemlerin takibi ve danışmanlık hizmetlerinin verilmesi
                •	Tanıma, tenfiz ve miras hukukuna ilişkin danışmanlık hizmeti verilmesi,
                •	Yabancıların Türkiye’de hukuk ve ceza mahkemelerinde temsili
                `

            },
            {
                header: "Aile Hukuku",
                image: "./white-img/family.png",
                contentHeader: "Aile Hukuku",
                contentImage: "./img/family_law.jpg",
                content: `Eşler arasındaki, ana baba – çocuk arasındaki kişisel ve mali ilişkileri düzenlemek üzere oluşan kuralların tümüne aile hukuku denir.
                
                Özdemir avukatlık olarak müvekkillerimize bu kapsamda verdiğimiz başlıca hizmetleri şu şekilde sayabiliriz:`,
                contentList: `                •	Nişanlanmadan kaynaklı maddi ve manevi tazminat taleplerine ilişkin davalara bakmak,
                •	Boşanma davasını takip etmek ve Anlaşmalı boşanma protokolünün hazırlanmasında hukuki destek sunmak,
                •	Mal rejimi sözleşmelerinin düzenlenmesine ilişkin olarak hukuki destek sağlamak,
                •	Yoksulluk ve iştirak nafakasına ilişkin taleplerde bulunmak,
                •	Boşanma davaları sebebiyle maddi ve manevi tazminat davalarına bakmak,
                •	Velayetin değiştirilmesi davasına bakmak,
                •	Aile konutunun tahsis edilmesi hususunda hukuki işlemleri gerçekleştirmek,
                •	Vesayet ve kayyımlık davalarını takip etmek,
                •	Evlat edinme hususunda hukuki destekte bulunmak,
                •	Yabancı mahkemeler tarafından verilen kararların tanıma ve tenfizi işlemlerini gerçekleştirmek,
                •	Ailenin Korunması ve Kadına Şiddetin Önlenmesi Hakkında kanun kapsamında yer alan tedbir taleplerinde bulunmak,
                •	İddet müddetinin kaldırılması davasını takip etmek,
                •	Babalık ve soybağı davalarının takibini gerçekleştirmek.
                `

            },
            {
                header: "Arabuluculuk Hizmeti",
                image: "./white-img/mediation.png",
                contentHeader: "Arabuluculuk Hizmeti",
                contentImage: "./img/handshake.jpg",
                content: `Özdemir Avukatlık ve Arabuluculuk Bürosu, Arabuluculuk Daire Başkanlığı siciline bağlı olarak çalışan uzman arabulucu ile tüm hukuki konularda şahıslar ve şirketler için taraf vekilliği, zorunlu arabuluculuk hizmeti ve ihtiyari arabuluculuk hizmeti vermektedir.

                Özdemir avukatlık ve Arabuluculuk olarak müvekkillerimize bu kapsamda verdiğimiz başlıca hizmetleri şu şekilde sayabiliriz:`,
                contentList: `                •   İş hukukundan kaynaklanan uyuşmazlıklar
                •   İşçi-işveren uyuşmazlıkları 
                •   Tüketici hukukundan kaynaklanan uyuşmazlıklar
                •   Ticaret hukukundan kaynaklanan uyuşmazlıklar
                •   Uzmanlık gerektirmeyen tüm arabuluculuk kapsamındaki uyuşmazlıklar
                `
            },
            {
                header: "Basın ve Medya",
                image: "./white-img/media.png",
                contentHeader: "Basın ve Medya",
                contentImage: "./img/Media-Law.jpg",
                content: `Özdemir Avukatlık Bürosu, alanında yetkin avukatları aracılığı ile basın yoluyla işlenen suçlar ve basın yoluyla kişilik ihlallerinin takibi başta olmak üzere her türlü Basın ve medya hukukuna ilişkin danışmanlık hizmetini vermektedir.

                Özdemir avukatlık olarak müvekkillerimize bu kapsamda verdiğimiz başlıca hizmetleri şu şekilde sayabiliriz:`,
                contentList: `                •	Kaldırılmasını istenen içeriğin kaldırılması süreci
                •	Basın yoluyla gerçekleştirilen kişilik haklarının ihlallerinde maddi- manevi tazminat davası açılması ve takibi,
                •	Erişim engelleme kararları
                •	Basın kurumlarındaki tekzip sürecinin yönetilmesi
                `

            },
            {
                header: "Bilişim Hukuku ve KVKK",
                image: "./white-img/computer.png",
                contentHeader: "Bilişim Hukuku ve KVKK",
                contentImage: "./img/law-and-tech.jpg",
                content: `Özdemir Avukatlık Bürosu, alanında yetkin avukatları aracılığı ile bilişim sistemleri yoluyla işlenen suçlar ile ilgili ceza ve hukuki uyuşmazlıkların takibi başta olmak üzere her türlü Bilişim hukukuna ilişkin danışmanlık hizmetini vermektedir.
                
                Özdemir avukatlık olarak müvekkillerimize bu kapsamda verdiğimiz başlıca hizmetleri şu şekilde sayabiliriz:`,
                contentList: `•	İnternetten içerik kaldırma
                •	Kişisel verilen korunması ile ilgili her türlü işlem
                •	Bilişim sistemleri yoluyla dolandırıcılık
                •	Bilişim yoluyla işlenen müstehcenlik , şantaj ve tehdit suçlarının takibi
                •	İnternetten yalan haber kaldırma
                •	Sosyal medya hesaplarının kapatılması
                •	Sahte sosyal medya hesabı kapattırma
                •	Bilişim sistemlerine girme, engelleme, bozma, verileri yok etme veya değiştirme 
                •	Banka veya kredi kartlarının kötüye kullanılması
                •	Yasak cihaz veya program kullanılması`

            },
            {
                header: "Ceza Hukuku",
                image: "./white-img/criminal.png",
                contentHeader: "Ceza Hukuku",
                contentImage: "./img/criminal.jpg",
                content: `Özdemir Avukatlık Bürosu, alanında yetkin ceza avukatları aracılığı ile başta ağır cezanın kapsamına giren suçlar olmak üzere her türlü TCK kapsamında suç sayılan eylemler hususuna ilişkin danışmanlık hizmetini vermekte olup şikayetçi veya şüpheli taraf olmasına göre bu hizmetler değişmektedir.

                Özdemir avukatlık olarak müvekkillerimize bu kapsamda verdiğimiz başlıca hizmetleri şu şekilde sayabiliriz:`,
                contentList: `•	Başlatılan soruşturma ve kovuşturma süreçlerinde hukuki destekte bulunma
                •	Soruşturmanın etkin ilerlemesi ve delillerin toplanması
                •   Müvekkilinin etkili bir şekilde savunmasını yapmak
                •   Müvekkilini hukuki olarak korumak,
                •   Müvekkilin ifadesinin, savunmasının alınması sırasında kendisine hukuki yardımda bulunmak,
                •   Mahkeme tarafından aleyhe bir karar verilmesi halinde söz konusu karara ilişkin olarak itirazlarını gerçekleştirmek ve kanun yollarına başvurmak
                `

            },
            {
                header: "Elektronik Ticaret Hukuku",
                image: "./white-img/money-transfer.png",
                contentHeader: "Elektronik Ticaret Hukuku",
                contentImage: "./img/e-commerce.jpg",
                content: `Özdemir Avukatlık Bürosu, alanında yetkin avukatları aracılığı ile İnternet üzerinden gerçekleşen ticaret ve ticari işlemler ile ilgili ceza ve hukuki uyuşmazlıkların takibi başta olmak üzere elektronik para ve ödeme hizmetlerini de kapsayan her türlü e-ticaret hukukuna ilişkin danışmanlık hizmetini vermektedir.

                Özdemir avukatlık olarak müvekkillerimize bu kapsamda verdiğimiz başlıca hizmetleri şu şekilde sayabiliriz:`,
                contentList: `                •	Elektronik ticaretle ilgili davaların açılması ve takip edilmesi
                •	Elektronik para ve ödeme hizmetleri hususunda hukuki destek
                •	Bilişim suçları ile ilgili açılacak davalarda hukuki destek sağlanması
                •	Mesafeli satış sözleşmesinden doğan hakların savunulması
                `

            },
            {
                header: "Gayrimenkul Hukuku",
                image: "./white-img/house.png",
                contentHeader: "Gayrimenkul Hukuku",
                contentImage: "./img/estate.jpg",
                content: `Özdemir Avukatlık Bürosu, alanında yetkin avukatları aracılığı ile taşınmaz hukuku ile ilgili her türlü uyuşmazlıklara ilişkin danışmanlık hizmetini vermektedir.

                Özdemir avukatlık olarak müvekkillerimize bu kapsamda verdiğimiz başlıca hizmetleri şu şekilde sayabiliriz:`,
                contentList: `•	Tapu tescil ve intikal davaları
                •	Kira alacağı ve tahliye işlemleri
                •	Ortaklığın giderilmesi ( izale-i şüyu ) davası
                •	İstihkak ( eşyayı geri alma ) davası
                •	Kat mülkiyeti kanunu kapsamındaki uyuşmazlıklar
                •	El atmanın önlenmesi ( müdahalenin meni ) davası
                •	Zilyetlik davaları
                •	Tapu sicil kayıt ve düzetlme işlemleri
                •	Muris muvazasına dayalı tapu iptal ve tescil davası
                •	Taşınmaz mal zilyetliğine yapılan tecavüzlerin önlenmesi
                •	Mirasçılık  belgesi
                •	Noter kaynaklı işlemler
                `

            },
            {
                header: "İcra ve İflas Hukuku",
                image: "./white-img/income.png",
                contentHeader: "İcra ve İflas Hukuku",
                contentImage: "./img/enforcement.jpg",
                content: `Özdemir Avukatlık Bürosu, alanında yetkin avukatları aracılığı ile icra ve iflas hukuku kapsamında her türlü takip ve iflas işlemlerine ilişkin danışmanlık hizmetini vermektedir.
                
                Özdemir avukatlık olarak müvekkillerimize bu kapsamda verdiğimiz başlıca hizmetleri şu şekilde sayabiliriz:`,
                contentList: `•	İcra takibi işlemleri
                •	İcra takibine itiraz işlemleri
                •	Birikmiş nafaka alacakları
                •	Genel haciz yolu ile takip işlemleri
                •	Kambiyo senetlerine mahsus haciz yolu ile takip işlemleri
                •	Rehnin paraya çevrilmesi yoluyla takip işlemleri
                •	İflas
                •	Taşınmazın Tahliyesi
                •	Karşılıksız çek davalarının takibi 
                •	İhalenin feshi davası
                `

            },
            {
                header: "İş ve Sosyal Güvenlik Hukuku",
                image: "./white-img/social.png",
                contentHeader: "İş ve Sosyal Güvenlik Hukuku",
                contentImage: "./img/labor.jpg",
                content: `Özdemir Avukatlık Bürosu, alanında yetkin avukatları aracılığı ile İş ve sosyal güvenlik hukuku kapsamında işçi ve işveren taraflarına hukuk, ceza ve arabuluculuk konularına ilişkin danışmanlık hizmetini vermektedir.
                
                Özdemir avukatlık olarak müvekkillerimize bu kapsamda verdiğimiz başlıca hizmetleri şu şekilde sayabiliriz:`,
                contentList: `•	Sigorta hukukuna dayalı işlemler
                •	Hizmet tespit davası
                •	İşçilik alacakları(kıdem, ihbar, fazla mesai, ücret vb. alacaklar) ve tazminatlar
                •	İş hukukundan kaynaklanan arabuluculuk hizmeti
                •	İşe iade talebi
                •	Noter aracılığıyla çekilen haklı ihtar vb işlemler
                •	İş kazası ile uyuşmazlıklar
                •	İşveren ve işçinin haklı fesih ile ilgili işlemler
                •	İşveren ili ilgili sözleşmeler
                •	işçi ve işveren hakları
                •	Deniz iş hukuku ile ilgili uyuşmazlıklar
                `

            },
            {
                header: "Tazminat Hukuku",
                image: "./white-img/hands.png",
                contentHeader: "Tazminat Hukuku",
                contentImage: "./img/compensation.jpg",
                content: `Özdemir Avukatlık Bürosu, alanında yetkin avukatları aracılığı ile Tazminat hukuku kapsamında maddi(ölüm sebebiyle destekten yoksun kalma, maluliyet ve işgücü kaybı vb.) ve manevi tazminat davaları ile ilgili konularda danışmanlık hizmetini vermektedir.`,
                contentList: ``

            },
            {
                header: "Sağlık ve İlaç Hukuku",
                image: "./white-img/healthcare.png",
                contentHeader: "Sağlık ve İlaç Hukuku",
                contentImage: "./img/medicine.jpg",
                content: `
                Özdemir Avukatlık Bürosu, alanında yetkin avukatları aracılığı ile Sağlık ve ilaç hukuku kapsamında hasta ve hekim hakları başta olmak üzere Malpractice ile ilgili idari,cezai ve hukuki davalar ile ilgili konularda danışmanlık hizmetini vermektedir.`,
                contentList: ``

            },
            {
                header: "Ticaret ve Şirketler Hukuku",
                image: "./white-img/company.png",
                contentHeader: "Ticaret ve Şirketler Hukuku",
                contentImage: "./img/corporate.jpg",
                content: `
                Özdemir avukatlık bürosu, alanında yetkin avukatları aracılığı ticaret, şirketler ve rekabet hukuku kapsamında başta şirket avukatlığı olmak üzere şirket yetkililerine hukuk, ceza ve arabuluculuk konularına ilişkin danışmanlık hizmetini vermektedir.
                
                Özdemir avukatlık olarak müvekkillerimize bu kapsamda verdiğimiz başlıca hizmetleri şu şekilde sayabiliriz:`,
                contentList: `•	Anonim,  kollektif, komandit, limited,kooperatif ve adi şirket kurulu ve tasfiye süreci
                •	Şirket lehine açılan dava ve icra takipleri ile ilgili hukuki destek
                •	Şirket aleyhine açılan dava ve icra takipleri ile ilgili hukuki destek
                •	Şirket ile ilgili arabuluculuk hizmeti
                •	Noter aracılığıyla yapılacak işlemler
                •	Rekabet yasağı ile ilgili uyuşmazlıklar
                •	Şirketin hazırlayacağı sözleşmeler ile ilgili hukuki destek
                `

            },
            {
                header: "Tüketici Hukuku",
                image: "./white-img/consumer-behavior.png",
                contentHeader: "Tüketici Hukuku",
                contentImage: "./img/consumer.jpg",
                content: `
                Özdemir avukatlık bürosu, alanında yetkin avukatları aracılığı tüketici hukuku kapsamında tüketici haklarını gözeterek tüketiciye danışmanlık hizmetini vermektedir.
                
                Özdemir avukatlık olarak müvekkillerimize bu kapsamda verdiğimiz başlıca hizmetleri şu şekilde sayabiliriz:`,
                contentList: `•	Tüketici Mahkemelerinde dava açılması ve davaların takibi,
                •	Tüketici Hakem heyetlerinde görülen uyuşmazlıklar
                •	Tüketici hukukuna dayalı Arabuluculuk işlemleri 
                •	Ayıplı mal neticesinde tüketicinin uğradığı zarar için tazminat davaları
                •	Tüketici hukuku ile ilgili sözleşmeler
                `

            },
            {
                header: "İdare ve Vergi Hukuku",
                image: "./white-img/tax.png",
                contentHeader: "İdare ve Vergi Hukuku",
                contentImage: "./img/tax.jpg",
                content: `
                Özdemir avukatlık bürosu, alanında yetkin avukatları aracılığı idare hukuku kapsamında devlet kurumlarına karşı yürütülen tüm işlemler hususunda danışmanlık hizmetini vermektedir.
                
                Özdemir avukatlık olarak müvekkillerimize bu kapsamda verdiğimiz başlıca hizmetleri şu şekilde sayabiliriz:`,
                contentList: `•	İptal ve tam yargı davalarının takibi
                •	Kurumlara yapılacak bireysel başvuru ile ilgili hukuki destek
                •	İdari para cezalarının iptali 
                •	Memurlar ile ilgili disiplin cezaları ve davalarının takibi
                •	Vergi ziyaı ve vergi kaçakçılığı ile ilgili suçlar
                •	Vergi davalarının takibi`
            }
        ]
    }



    render() {
        return <>
            <section className="page-section aboutSection mt-5" id="services" style={{ backgroundColor: "#F4EEE0" }}>
                <div className="container">
                    <div className="row text-center">
                        <h2 className="section-heading text-uppercase">HİZMETLERİMİZ</h2>
                        <h3 className="section-subheading text-muted">
                            Size nasıl yardımcı olabiliriz? Çözüme ulaşmak için yanınızdayız.
                        </h3>
                        {this.state.services.map((data, i) => (

                            <ServiceCard key={i} service={data.header} image={data.image} content={data.content}
                                contentImage={data.contentImage} contentHeader={data.contentHeader} contentList={data.contentList} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    }

}


export default Services;











