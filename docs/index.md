# ElektraLibra

**Elektronik komponentler icin gorsel destekli teknik bilgi kutuphanesi.**

Bu kutuphane; entegre, transistor, regulator, sensor, diyot, op-amp, mikrodenetleyici ve diger elektronik komponentleri duzenli bir teknik defter gibi arsivlemek icin olusturuldu.

## Kutuphane amaci

Her komponent sayfasinda su bilgiler standart olarak tutulacak:

- Ne ise yarar?
- Nasil calisir?
- Pin yapisi ve paket bilgisi
- Tipik uygulama devresi
- Olculmesi gereken kritik voltajlar
- Ariza tespit yontemleri
- Sik gorulen arizalar
- Muadil komponentler
- Datasheet ve referans baglantilari
- Kisisel notlar

## Ilk eklenen komponentler

| Komponent | Kategori | Kisa Aciklama |
|---|---|---|
| [TPS5420D](components/tps5420d.md) | Guc Yonetimi | 2A step-down buck converter |

!!! info "Kullanim"
    Yeni bir komponent eklemek icin `docs/components/` klasorune yeni bir Markdown dosyasi eklenir ve `mkdocs.yml` icindeki `nav` bolumune sayfa adi yazilir.
