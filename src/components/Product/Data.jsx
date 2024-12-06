import Img2 from "../../assets/Antimo anak jeruk.png";
import Img4 from "../../assets/Antimo strawbery.png";
import Img1 from "../../assets/Antimo tablet.png";
import Img5 from "../../assets/becefort sirup.png";
import Img6 from "../../assets/becefort tablet.png";
import Img7 from "../../assets/betafort.png";
import Img11 from "../../assets/bioron forte.png";
import Img14 from "../../assets/bioron.png";
import Img8 from "../../assets/febrinex.png";
import Img13 from "../../assets/Fitogen.png";
import Img10 from "../../assets/hemorogard.png";
import Img9 from "../../assets/livron.png";
import Img3 from "../../assets/noza.png";
import Img12 from "../../assets/tensigard.png";

const ProductData = [
  {
    id: 1,
    img: Img1,
    name: "Antimo Tablet",
    Kemasan: "Dus, 72 catch cover @ 1 strip @ 10 tablet ",
    Komposisi: "Tiap tablet berisi :Dimenhydrinate 50 mg",
    Indikasi: "Mabuk, muntah dalam perjalanan yang diderita jika mempergunakan kendaraan bermotor, kapal, kereta api atau pesawat udara.",
    NIE: "DTL7219929710A1",
    Sertf_halal: "ID00410000120550321",
    category: "FARMA",
  },
  {
    id: 2,
    img: Img2,
    name: "Antimo Anak Jeruk",
    Kemasan: "Dus, 10 sachet @ 5 ml",
    Komposisi: "Tiap sachet (5 ml) mengandung : Dimenhydrinate 12,5 mg",
    Indikasi: "Mabok, muntah dalam perjalanan yang diderita jika mempergunakan kendaraan bermotor, kapal, kereta api atau pesawat udara.",
    NIE: "DTL0319923833A1",
    Sertf_halal: "ID00410000120550321",
    category: "FARMA",
  },
  {
    id: 3,
    img: Img3,
    name: "Noza",
    Kemasan: "Dus, 25 catch cover @ 1 strip @ 4 kaplet",
    Komposisi: "Tiap kaplet berisi : Triprolidin HCl 2,5 mg,Pseudoephedrine HCl 30 mg, Paracetamol 500 mg ",
    Indikasi: "Untuk meringankan gejala flu seperti demam, sakit kepala, hidung tersumbat dan bersin-bersin. ",
    NIE: "DTL9519914904A1",
    category: "FARMA",
  },
  {
    id: 4,
    img: Img4,
    name: "Antimo Strawberry",
    Kemasan: "Dus, 10 sachet @ 5 ml",
    Komposisi: "Tiap sachet (5 ml) mengandung : Dimenhydrinate 12,5 mg ",
    Indikasi: "Mabok, muntah dalam perjalanan yang diderita jika mempergunakan kendaraan bermotor, kapal, kereta api atau pesawat udara",
    NIE: "DTL1119928733A1",
    Sertf_halal: "ID00410000120550321",
    category: "FARMA",
  },
  {
    id: 5,
    img: Img5,
    name: "Becefort Sirop",
    Kemasan: "Dus, botol kaca @ 60 ml",
    Komposisi: "Tiap 5 ml :Thiamine HCl (Vitamin B1) 10 mg Riboflabvin Sodium Phosphate (Vitamin B2) 6 mg Pyridoxine HCl (Vitamin B6) 10 mg Cyanocobalamine (Vitamin B12) 10  mcg D-Pantothenol 10 mg Nicotinamide 50 mg Ascorbic Acid (Vitamin C) 100 mg",
    Indikasi: "Membantu memelihara kesehatan tubuh pada masa pertumbuhan dan penyembuhan.",
    NIE: "POM SD141644831",
    Sertf_halal: "ID00410000037020220",
    category: "NON FARMA",
  },
  {
    id: 6,
    img: Img6,
    name: "Becefort Tablet",
    Kemasan: "Dus, 10 strip @ 10 kaplet salut selaput Dus, 25 catchcover @ 4 kaplet salut selaput",
    Komposisi: "1 kaplet salut selaput : Thiamine Nitrate (Vitamin B1) 15 mg Riboflavin (Vitamin B2) 10 mg Pyridoxine (Vitamin B6) HCl 5 mg Cyanocobalamin (Vitamin B12) 100 mcg Calcium pantothenate 20 mg Nicotinamide (Vitamin B3) 50 mg Ascorbic Acid (Vitamin C) 500 mg Tocopherol (Vitamin E) 30 mg ",
    Indikasi: "Sebagai suplemen vitamin pada keadaan dimana kebutuhan vitamin C, vitamin B dan Kalsium meningkat misalnya pada masa pertumbuhan, masa penyembuhan, kekurangan gizi, pada wanita hamil dan menyusui.",
    NIE: "POM SD131543791",
    Sertf_halal: "ID00410000204270321",
    category: "NON FARMA",
  },
  {
    id: 7,
    img: Img7,
    name: "Betafort Suspensi", 
    Kemasan: "Dus, botol kaca @ 60 ml",
    Komposisi: "Tiap 5 ml mengandung : Ascorbic Acid (Vitamin C) 4,2 mg Nicotinaminde 45 mg Dexpanthenol 5 mg Pyridoxine HCl (Vitamin B6 HCl) 1,4 mg Riboflavin Sodium Phosphate (Vitamin B2 Sodium Phosphate) 1,2 mg Thiamine HCl (Vitamin B1 HCl) 1 mg Cholecalciferol (Vitamin D3) 10- mcg Cyanocobalamin (Vitamin B12) 1,4 mcg",
    Indikasi: "Membantu memenuhi kebutuhan vitamin B kompleks, vitamin C, vitamin D dan provitamin A seperti pada masa setelah penyembuhan dari sakit. ",
    NIE: "POM SD121643171",
    Sertf_halal: "ID00410000037020220",
    category: "NON FARMA",
  },
  {
    id: 8,
    img: Img8,
    name: "Febrinex",
    Kemasan: "Dus, 1 botol @ 60 ml ",
    Komposisi: "Tiap sendok teh (5 ml) berisi : Paracetamol 130 mg Dexchlorpheniramine maleate 1 mg Guaiacolsulfonate Potassium 20 mg ",
    Indikasi: "Untuk mengobati batuk berdahak dan menurunkan demam. ",
    NIE: "DTL7219908133A1",
    Sertf_halal: "ID00410000120550321",
    category: "NON FARMA",
  },
  {
    id: 9,
    img: Img9,
    name: "Livron Plex",
    Kemasan: "Dus, 10 strip @ 10 tabet salut gula ",
    Komposisi: "1 tablet salut gula : Riboflavin (Vitamin B2) 0,25 mg Pyridoxine HCl (Vitamin B6) 0,25 mg  Folic acid 500 mcg Ca pantothenate 1,5 mg Nicotinamide (Vitamin B3) 10 mg Thiamine mononitrate (Vitamin B1) 1,5 mg Ferrous gluconate 107,5 mg setara dengan elemental iron 12,45 mg Ascorbic acid (Vitamin C) 12,50 mg Copper gluconate 1,18 mg setara dengan elemental Copper 0,165 mg",
    Indikasi: "Sebagai suplemen vitamin dan mineral khususnya untuk keadaan anemia karena kekurangan zat besi, wanita hamil/menyusui. ",
    NIE: "POM SD161548171",
    Sertf_halal: "ID00410000204270321",
    category: "NON FARMA",
  },
  {
    id: 10,
    img: Img10,
    name: "Hemorogard",
    Kemasan: "Dus, 3 blister @ 10 kapsul  ",
    Komposisi: "Tiap kapsul berisi : Ekstrak Graptophylli picti folium 14 mgEkstrak Citri sinensis fructus 50 mg (Mengandung Bioflavonoid 50%)",
    Indikasi: "Kombinasi Daun Wungu (Graptophylli picti folium) dan buah jeruk (Citri sinensis fructus) yang mengandung bioflavonoid membantu meringankan gejala wasir",
    NIE: "POM TR092399571",
    Sertf_halal: "ID00410000261420321",
    category: "HERBAL",
  },
  {
    id: 11,
    img: Img11,
    name: "Bioron Forte",
    Kemasan: "Dus, 7 catch cover @ 4 tablet salut gula",
    Komposisi: "Tiap tablet mengandung Thiamine HCL (B1) 100 mg, Pyridoxine HCL (B6) 100 mg dan Cyanocobalamin (B12) 5.000 Mcg",
    Indikasi: "Digunakan sebagai vitamin neurotropik yang sangat diperlukan untuk menjaga kesehatan sistem syaraf supaya dapat bekerja dengan baik.",
    NIE: "DBL2119907716B1",
    category: "FARMA",
  },
  {
    id: 12,
    img: Img12,
    name: "Tensigard",
    Kemasan: "Dus, @ 10 kapsul Dus",
    Komposisi: "Tiap kapsul mengandung : Ekstrak Apii graveolentis herba 92 mg Ekstrak Orthosiphonis staminei folium 28 mg",
    Indikasi: "TENSIGARD efektif digunakan untuk menurunkan tekanan darah sistolik maupun diastolik pada penderita hipertensi esensial ringan sampai sedang, tanpa mempengaruhi kadar elektrolit plasma, kadar lipid plasma maupun kadar gula darah. TENSIGARD juga dapat digunakan sebagai pengontrol dalam pemeliharaan tekanan darah pada penderita hipertensi esensial ringan sampai sedang.",
    NIE: "POM FF142300591",
    Sertf_halal: "ID00410000261420321",
    category: "HERBAL",
  },
  {
    id: 13,
    img: Img13,
    name: "Fitogen",
    Kemasan: "Dus,isi 3 Strip x 10 Tablet",
    Komposisi: "Tiap kapsul mengandung : Red clover extr 100 mg, vit B1 10 mg, vit B6 10 mg, vit E 15 mg",
    Indikasi: "Suplemen utk memelihara kondisi fisik wanita pra menopause",
    NIE: "SD031504971",
    category: "HERBAL",
  },
  {
    id: 14,
    img: Img14,
    name: "Bioron",
    Kemasan: "Dus, @ 10 Strip x 10 Tablet",
    Komposisi: "Cyanocobalamin, Pyridoxine Hydrochloride, Thiamine Hydrochloride",
    Indikasi: "Bioron Tablet digunakan dalam perawatan, kontrol, pencegahan, & perbaikan penyakit, kondisi dan gejala berikut ini: Rendahnya jumlah sel darah merah, Lambung dan usus masalah, Kerusakan saraf permanen, Gangguan metabolisme, Kekurangan tiamin, Gangguan otak karena kekurangan tiamin sebagai vitamin neurotropik yang berguna menjaga kesehatan sistem saraf agar bisa bekerja dengan baik. Atasi pegal, lelah dan nyeri di otot.",
    NIE: "DBL9119907716A1",
    category: "NON FARMA",
  },
];

const categories = ["FARMA", "NON FARMA", "HERBAL"];
export { ProductData, categories };
