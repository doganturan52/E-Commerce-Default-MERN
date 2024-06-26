# Projeyi Kendi Bilgisayarınıza Kurma

Bu projeyi kurmak için ilk önce projeyi indirmeniz gerekir. Projeyi ister "Download ZIP" butonundan zip olarak indirip zipten çıkarın, isterseniz de projeyi klonlayarak indirin. Projeyi indirdikten sonra yapılması gerekenler şunlardır :

1. ) NodeJs'i indirin : https://nodejs.org/en (LTS olanı indirebilirsiniz)

2. ) Projeyi vs code veya benzeri bir kod editöründe ve IDE'de açın

3. ) Projedeki backend kısmının gerekli dosyalarını indirmek için, backend klasörünü terminalde açın, bunu
   yapmak için klasöre "sağ click > open in integrated terminal" diyebilirsiniz. Ardından açılan terminale
   "npm install" yazıp enter'a basın, gerekli dosyalar inecektir, indirmenin bitmesini bekleyin. Sonra da aynı terminale "npm start" yazıp enter'a basın. Projenin backend kısmı çalışacaktır.

4. ) Projedeki frontend kısmının gerekli dosyalarını indirmek için, frontend klasörünü terminalde açın, bunu
   yapmak için klasöre "sağ click > open in integrated terminal" diyebilirsiniz. Ardından açılan terminale
   "npm install" yazıp enter'a basın, gerekli dosyalar inecektir, indirmenin bitmesini bekleyin. Sonra da aynı terminale "npm run dev" yazıp enter'a basın. Projenin frontend kısmı da çalışacaktır. Artık tarayıcınızda proje açılacaktır ve terminalde de projenin çalıştığı yerel sunucu bağlantısı gözükecektir, proje tamamen çalışır haldedir.

# Açıklama

Bu e-ticaret sitesi ise şimdiye kadar yaptığım en karmaşık, gelişmiş projemdir.

Bu e-ticaret sitesini şimdiye kadar web tasarımıyla ilgili öğrendiğim tüm teknolojilerle tasarlamaya çalıştım.
Siteyi MERN Stack konseptinde yaptım. Bu yüzden bu e-ticaret sitesinin frontend tarafı için Html, Css, Javascript,
React ve Ant Design kullandım, backend tarafında CRUD işlemleri için API'lar oluşturdum ve teknoloji olarak
MongoDB, Express.js ve Node.js kullandım. Sonrasında sitenin backend kısmını ayrı, frontend kısmını ayrı olarak
host ettim (internete yükledim) ve bu iki kısmın bağlantısını sağladım.

Sitede ürün arama, sepet işlemleri, kullanıcı kaydı, kullanıcı girişi, ödeme ekranı, admin paneli gibi alanlar
vardır. Sitede ayrıca MongoDB veritabanı bağlantısı vardır ve site üzerinden CRUD (create, read, update, delete)
işlemleri de yapılmaktadır.

Sitenin admin paneli ise hiç kodlama bilmeyen bir kullanıcının siteye istediği veriyi (ürünü, kategoriyi, kuponu vb.)
ekleyebileceği şekilde basit tasarlanmıştır.

Sitede herhangi bir veri (kategori, kupon, kullanıcı, ürün, ürün yorumu vb.) değiştiğinde , eklendiğinde veya
silindiğinde bu değişiklikler anında veritabanına kaydedilir. Sonrasında veritabanından en güncel veriler çekilir
ve ilgili componentler içerisinde render edilir.

# Bu Projenin Bana Katkıları

Bu projeyi yaparak ben MERN Stack (MongoDB + Express + React + Node) konseptiyle bir projenin hem backend
hem de frontend kısmını uçtan uca yapmayı öğrendim, bu konuda öğrendiğim bilgileri iyice pekiştirdim.
Projeyi yaparken pekiştirdiğim bilgiler şunlardır :

1. ) CRUD işlemleri (Create, Read, Update, Delete )
2. ) CRUD işlemleri için API'lar oluşturma
3. ) Sitenin frontend ve backend kısımlarını internete yayınlama (hosting)
4. ) Sitenin frontend ve backend kısımlarının birbiri ile bağlantısını sağlama
5. ) Sitenin gizli bilgilerini içeren .env dosyalarını kullanma ve ortam değişkenlerini kullanma
6. ) SPA (Single Page Application) mantığı
7. ) Component mantığı
8. ) JSX ve TSX formatı
9. ) useState, useEffect, useCallback, useParams, useRef gibi React hook'ları
10. ) react-router-dom kütüphanesiyle client-side routing işlemlerini yapma
11. ) cliend-side rendering
12. ) props kullanımı
13. ) Context API kullanımı, useContext + createContext ile global state yönetimi
14. ) E-ticaret sitesi mantığı
15. ) Admin paneli yapımı
16. ) Conditional Rendering
17. ) JSON veri formatı
18. ) dotenv, cors, morgan, bcrypt, react-quill, react-slick, eslint gibi küçük kütüphanelerin kullanımı.
19. ) Ant Design (UI Kütüphanesi) kullanımı
20. ) Git ve Github kullanımı ve sürüm kontroü
21. ) npm CLI kullanımı
22. ) Backend kısmında Mongoose kullanımı
23. ) Backend kısmında route'lar oluşturma
24. ) Backend kısmında route'lar için mongoose modelleri (şemaları) oluşturma
25. ) react-router-dom kütüphanesiyle sayfa geçişi için client-side tarafında routing yapma
