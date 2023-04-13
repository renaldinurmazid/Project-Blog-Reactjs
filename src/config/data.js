export const blogList = 
[ 
  {
    id: 101,
    title: 'Pengenalan Git',
    category: 'Git',
    subCategory: ['Frontend', 'Backend', 'Fullstack'],
    desc:"Git adalah sebuah sistem pengontrol versi (version control system) yang digunakan untuk mengelola perubahan kode sumber (source code) pada suatu proyek perangkat lunak (software project). Git dapat membantu para pengembang perangkat lunak untuk bekerja secara terorganisir, efisien, dan terdokumentasi dengan baik dalam menangani perubahan kode sumber.",
    description:
      "<h2>Pengertian Git</h2>Git adalah sebuah sistem pengontrol versi (version control system) yang digunakan untuk mengelola perubahan kode sumber (source code) pada suatu proyek perangkat lunak (software project). Git dapat membantu para pengembang perangkat lunak untuk bekerja secara terorganisir, efisien, dan terdokumentasi dengan baik dalam menangani perubahan kode sumber.Git dikembangkan oleh Linus Torvalds pada tahun 2005 sebagai alternatif dari sistem pengontrol versi yang sudah ada saat itu. Git kemudian menjadi sangat populer dan saat ini digunakan oleh banyak perusahaan dan proyek open source di seluruh dunia.<h2>Fitur & Konsep Git</h2>Git memiliki beberapa fitur dan konsep penting yang perlu dipahami oleh para penggunanya, di antaranya adalah :<br><ol><li><strong>Repositori</strong></li>Repositori (repository) adalah tempat penyimpanan kode sumber dan berbagai informasi lainnya yang terkait dengan proyek. Repositori pada Git dapat berupa repositori lokal yang terdapat di komputer pengguna atau repositori jarak jauh (remote repository) yang terletak di server atau layanan hosting seperti GitHub atau GitLab.<li><strong>Commit</strong></li>Commit adalah tindakan menyimpan perubahan kode sumber ke dalam repositori. Setiap commit memiliki pesan yang berisi informasi mengenai perubahan apa yang dilakukan pada kode sumber.<li><strong>Branch</strong></li>Branch adalah cabang dari kode sumber yang dibuat untuk mengembangkan fitur atau memperbaiki bug tanpa mengganggu kode sumber utama (master branch). Setiap branch memiliki salinan dari kode sumber utama dan dapat dimodifikasi secara terpisah. Setelah selesai, branch dapat digabungkan kembali ke master branch.<li><strong>Merge</strong></li>Merge adalah proses menggabungkan dua branch yang berbeda ke dalam satu branch. Git akan mencoba untuk melakukan merge secara otomatis, namun terkadang diperlukan intervensi pengguna untuk menyelesaikan konflik (conflict) yang terjadi.<li><strong>Full Request</strong></li>Pull request adalah permintaan untuk menggabungkan branch yang telah selesai dikembangkan ke dalam branch utama (master branch) pada repositori jarak jauh. Pull request memungkinkan pengguna lain untuk meninjau dan memberikan masukan terhadap perubahan kode sumber sebelum akhirnya digabungkan ke dalam branch utama.<li><strong>Tag</strong></li>Tag adalah penanda yang digunakan untuk menandai suatu titik pada sejarah pengembangan kode sumber yang penting, seperti rilis (release) versi tertentu atau perubahan signifikan pada kode sumber.</ol><br>Untuk menggunakan Git, pengguna harus terlebih dahulu menginstal Git pada komputer atau server. Setelah itu, pengguna dapat membuat repositori baru, mengkloning (clone) repositori yang sudah ada, melakukan commit, membuat dan menggabungkan branch, membuat pull request, dan melakukan berbagai operasi lainnya menggunakan perintah-perintah Git pada command line atau melalui antarmuka grafis (GUI).<br><h2>Fungsi Git</h2><br>Fungsi utama Git adalah sebagai sistem pengontrol versi (version control system) yang dapat digunakan untuk mengelola perubahan kode sumber pada suatu proyek perangkat lunak. Git memungkinkan para pengembang untuk melacak perubahan kode sumber dari waktu ke waktu, mengembalikan kode sumber ke versi sebelumnya, dan melihat siapa yang membuat perubahan pada kode sumber.<br><br>Git juga memungkinkan para pengembang untuk bekerja secara terorganisir dan efisien dalam kolaborasi pada proyek perangkat lunak. Git memungkinkan para pengembang untuk bekerja pada kode sumber yang sama pada waktu yang sama, membuat branch untuk mengembangkan fitur atau memperbaiki bug tanpa mengganggu kode sumber utama, dan menggabungkan branch kembali ke kode sumber utama setelah selesai.Dengan menggunakan Git, para pengembang perangkat lunak dapat bekerja secara terorganisir, efisien, dan terdokumentasi dengan baik dalam mengembangkan perangkat lunak. Hal ini dapat membantu meningkatkan kualitas perangkat lunak dan mempermudah pengembangan perangkat lunak dalam tim atau secara individu.<br><br>Git bekerja dengan cara menyimpan snapshot atau gambaran dari setiap perubahan pada kode sumber dan menyimpannya pada sebuah database. Setiap perubahan yang dilakukan pada kode sumber akan disimpan sebagai commit, yang merupakan unit dasar pada Git. Setiap commit mencakup informasi seperti penulis perubahan, pesan commit, dan timestamp.<br><br><h2>Langkah-langkah Kerja Git</h2><br><ol><li><strong>Inisialisasi Repositori</strong></li>Pertama-tama, kita perlu membuat repositori Git pada direktori atau folder proyek kita dengan menggunakan perintah `git init`. Hal ini akan membuat Git database pada direktori proyek kita dan memungkinkan kita untuk menggunakan Git pada proyek kita.<li><strong>Menambahkan file ke repository</strong></li>Kita perlu menambahkan file pada repositori Git kita dengan menggunakan perintah `git add`. Perintah ini akan menambahkan file ke `staging area` atau area persiapan untuk dikommit. Setelah file ditambahkan pada staging area, kita dapat membuat commit pada perubahan yang dilakukan.<li><strong>Membuat Commit</strong></li>Kita dapat membuat commit dengan menggunakan perintah `git commit`. Setiap commit harus memiliki pesan yang menjelaskan perubahan yang dilakukan pada kode sumber. Setiap commit yang kita buat akan disimpan pada database Git.<li><strong>Melihat Perubahan Kode Sumber</strong></li>Kita dapat melihat perubahan kode sumber yang dilakukan pada suatu commit dengan menggunakan perintah `git diff`. Perintah ini akan menunjukkan perubahan kode sumber antara dua commit atau antara commit dan kode sumber di direktori kerja kita.<li><strong>Membuat Branch</strong></li>Kita dapat membuat branch pada repositori kita dengan menggunakan perintah `git branch`. Branch digunakan untuk mengembangkan fitur baru atau memperbaiki bug tanpa mengganggu kode sumber utama pada branch utama (biasanya disebut dengan nama `master` atau `main`).<li><strong>Menggabungkan Branch</strong></li>Setelah selesai mengembangkan fitur baru atau memperbaiki bug pada branch yang kita buat, kita dapat menggabungkan branch tersebut kembali ke branch utama dengan menggunakan perintah `git merge`.<li><strong>Push & Pull</strong></li>Jika kita bekerja dalam tim, kita dapat menarik (pull) perubahan yang dilakukan oleh anggota tim lain pada repositori Git kita dengan menggunakan perintah `git pull`. Kita juga dapat mendorong (push) perubahan yang kita lakukan pada repositori Git ke server jarak jauh atau layanan hosting seperti GitHub atau GitLab dengan menggunakan perintah `git push`.</ol><br>Itulah beberapa langkah utama dalam cara kerja Git. Dengan menggunakan Git, kita dapat mengelola perubahan pada kode sumber dengan baik, mengembangkan perangkat lunak secara terorganisir dan efisien, serta berkolaborasi dengan tim secara lebih mudah.",
    authorName: 'Renaldi Nurmazid',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'Mart 30, 2023',
    cover: '/assets/images/git.png',
  }, 
  {
    id: 1,
    title: 'Pengenalan Java',
    category: 'Database',
    subCategory: ['Mobile App', 'Backend', 'Data Analyst'],
    desc:"Java adalah bahasa pemrograman tingkat tinggi yang populer digunakan untuk pengembangan aplikasi berbasis web, desktop, mobile, dan perangkat lunak umum lainnya. Java pertama kali dikembangkan oleh Sun Microsystems pada tahun 1995 dan sejak saat itu telah menjadi salah satu bahasa pemrograman yang paling banyak digunakan di dunia.",
    description:
    '<h2>Pengertian Java</h2><br>Java adalah bahasa pemrograman tingkat tinggi yang populer digunakan untuk pengembangan aplikasi berbasis web, desktop, mobile, dan perangkat lunak umum lainnya. Java pertama kali dikembangkan oleh Sun Microsystems pada tahun 1995 dan sejak saat itu telah menjadi salah satu bahasa pemrograman yang paling banyak digunakan di dunia.Java dirancang untuk memiliki kemampuan portabilitas yang tinggi, yang berarti kode yang ditulis dalam bahasa pemrograman ini dapat dijalankan di berbagai platform perangkat keras dan sistem operasi. Hal ini dicapai melalui penggunaan mesin virtual Java (Java Virtual Machine/JVM), yang memungkinkan kode Java dikompilasi ke dalam format yang dapat dijalankan pada berbagai sistem operasi.Java memiliki sintaks yang relatif mudah dipahami dan banyak dukungan dari komunitas pengembang yang aktif. Bahasa pemrograman ini juga mendukung paradigma pemrograman berorientasi objek, yang memungkinkan pengembang untuk membuat program modular dengan struktur yang jelas dan mudah dipahami.<br><h2>Sejarah Java</h2><br>Java adalah bahasa pemrograman yang dibuat oleh James Gosling pada tahun 1991 saat bekerja di Sun Microsystems. Tujuan dari pembuatan bahasa pemrograman ini adalah untuk membuat bahasa pemrograman yang dapat berjalan pada berbagai platform perangkat keras dan sistem operasi. Gosling dan timnya mulai mengembangkan bahasa pemrograman ini pada awal 1990-an dengan nama awal "Oak". Kemudian, nama ini diubah menjadi "Java" karena telah diketahui bahwa ada merek dagang yang sama dengan nama "Oak".Pada tahun 1995, Sun Microsystems merilis Java versi pertama secara resmi dengan nama "Java Development Kit 1.0". Pada tahun yang sama, mereka juga memperkenalkan Java Runtime Environment (JRE) dan Java Applet, yang memungkinkan kode Java untuk dieksekusi pada browser web.<br>Pada tahun 2006, Sun Microsystems merilis Java Platform, Standard Edition (Java SE) 6, yang menambahkan berbagai fitur baru seperti dukungan untuk bahasa pemrograman dinamis dan dukungan untuk koneksi ke database yang lebih mudah. Sun Microsystems kemudian diakuisisi oleh Oracle Corporation pada tahun 2010, yang saat ini masih menjadi pemilik dan pengembang utama Java. Oracle terus merilis versi baru Java, termasuk Java SE 7 dan Java SE 8, dengan peningkatan fitur dan performa yang lebih baik.Java juga terus berkembang dalam pengembangan aplikasi web, desktop, dan mobile. Dalam pengembangan aplikasi web, Java mendukung teknologi seperti JavaServer Pages (JSP), Servlet, dan Framework seperti Spring dan Hibernate. Dalam pengembangan aplikasi desktop, Java mendukung teknologi seperti Swing dan JavaFX. Dan dalam pengembangan aplikasi mobile, Java digunakan dalam pengembangan aplikasi Android.<br><h2>Fungsi Java</h2><br><ol type="1"><li>Pengembangan aplikasi web: Java dapat digunakan untuk mengembangkan aplikasi web menggunakan teknologi seperti JavaServer Pages (JSP), Servlet, dan Framework seperti Spring dan Hibernate. Dalam pengembangan aplikasi web, Java juga dapat digunakan untuk mengembangkan aplikasi berbasis RESTful API.</li><li>Pengembangan aplikasi mobile: Java juga dapat digunakan untuk mengembangkan aplikasi mobile. Android, salah satu sistem operasi mobile yang paling banyak digunakan, menggunakan bahasa pemrograman Java sebagai bahasa utama dalam pengembangan aplikasi mobile.</li><li>Pengembangan perangkat lunak umum: Java juga dapat digunakan untuk mengembangkan perangkat lunak umum, seperti program database, program manajemen jaringan, atau perangkat lunak server.</li> <li>Pengembangan game: Java dapat digunakan untuk mengembangkan game, baik itu game desktop maupun mobile. Java juga memiliki beberapa framework yang khusus dibuat untuk pengembangan game, seperti Java Monkey Engine (JME) dan LibGDX.</li><li>Pengembangan Internet of Things (IoT): Java juga dapat digunakan untuk mengembangkan aplikasi Internet of Things (IoT) yang menghubungkan berbagai perangkat untuk memungkinkan interaksi antar perangkat.</li></ol><br><h2>Komponen Java</h2><br>Java memiliki banyak komponen penting yang diperlukan untuk membangun aplikasi Java yang sukses. Berikut adalah beberapa komponen penting Java:<ol type="1"><br><li>Java Development Kit (JDK) - Ini adalah perangkat lunak dasar yang diperlukan untuk mengembangkan aplikasi Java. JDK terdiri dari Java Runtime Environment (JRE), Java Compiler, dan Java API.</li> <li>Java Virtual Machine (JVM) - Ini adalah lingkungan runtime untuk aplikasi Java. JVM membantu dalam mengeksekusi kode Java dan memberikan portabilitas untuk kode Java di berbagai platform.</li><li>Integrated Development Environment (IDE) - Ini adalah perangkat lunak yang menyediakan lingkungan pengembangan terpadu untuk mengembangkan aplikasi Java. IDE menyediakan alat untuk menulis, mengedit, dan menguji kode Java.</li><li>Java Database Connectivity (JDBC) - Ini adalah API standar untuk mengakses database dari aplikasi Java. JDBC menyediakan kelas-kelas yang dapat digunakan untuk terhubung dengan database, mengeksekusi kueri, dan memanipulasi data.</li><li>Java Server Pages (JSP) - Ini adalah teknologi yang memungkinkan pembuatan halaman web dinamis dengan menggunakan Java. JSP menyediakan tag-tag khusus untuk memasukkan kode Java ke dalam halaman web.</li><li>Java Servlets - Ini adalah program Java yang dijalankan di server web untuk menghasilkan respon yang dinamis untuk permintaan HTTP. Servlets menyediakan kelas-kelas untuk mengakses data dari permintaan HTTP, memproses data tersebut, dan menghasilkan respon HTTP.</li></ol><br><h2>Cara Kerja Java</h2><br>Java adalah bahasa pemrograman tingkat tinggi yang dirancang untuk digunakan dalam pengembangan aplikasi perangkat lunak. Java memungkinkan pengembang untuk membuat program yang dapat dijalankan di berbagai platform dan perangkat dengan memanfaatkan teknologi Java Virtual Machine (JVM).<br> Berikut ini cara kerja Java :<ol type="1"><li><h4>Kompilasi</h4></li>Program Java ditulis dalam bahasa Java dan disimpan dalam file dengan ekstensi .java. Selanjutnya, file Java tersebut dikompilasi menggunakan Java Compiler, yang menghasilkan file bytecode Java dengan ekstensi .class. Bytecode Java adalah kode yang dapat dieksekusi oleh JVM dan dihasilkan dari proses kompilasi. Bytecode Java adalah kode yang agnostik platform, yang berarti bahwa kode tersebut dapat dijalankan di berbagai platform tanpa perlu memodifikasi kode tersebut.<li><h4>Pemuatan</h4></li>Setelah bytecode Java dibuat, JVM memuat bytecode Java ke dalam memori dan memulai eksekusi program. JVM membaca bytecode Java baris per baris dan menjalankannya sesuai instruksi yang terdapat pada bytecode tersebut.<li><h4>Interpretasi</h4></li>JVM menggunakan proses interpretasi untuk mengeksekusi bytecode Java. Proses interpretasi melibatkan pengambilan bytecode Java, menerjemahkannya menjadi instruksi mesin yang dapat dipahami oleh komputer, dan menjalankan instruksi tersebut. Proses interpretasi ini terjadi secara berulang-ulang sampai program Java selesai dieksekusi.<li><h4>Just-In-Time Complitation</h4></li>Selama proses interpretasi, JVM menggunakan teknologi Just-In-Time (JIT) untuk meningkatkan kinerja program Java. JIT mengompilasi bytecode Java ke kode mesin yang dapat dijalankan langsung oleh komputer. Proses JIT terjadi secara otomatis selama program Java sedang dieksekusi, dan hasilnya disimpan dalam memori untuk penggunaan selanjutnya.<li><h4>Garbage Collection</h4></li>Java menggunakan proses Garbage Collection untuk mengelola alokasi memori pada program Java. Garbage Collection memonitor penggunaan memori oleh program Java dan menghapus objek yang tidak lagi diperlukan dari memori. Proses ini memastikan bahwa program Java tidak menghabiskan terlalu banyak memori dan tidak mengalami kebocoran memori.<li><h4>Exeception Handling</h4></li>Java menyediakan mekanisme exception handling yang memungkinkan program Java untuk menangani kesalahan dan kondisi yang tidak diharapkan dengan cara yang elegan dan efektif. Exception handling memungkinkan program Java untuk berjalan dengan lancar bahkan jika terjadi kesalahan atau kondisi yang tidak diharapkan.<li><h4>Platform Independence</h4></li>Salah satu keunggulan Java adalah platform independencenya, yang memungkinkan program Java dijalankan di berbagai platform tanpa perlu memodifikasi kode tersebut. Hal ini dimungkinkan oleh JVM, yang bertanggung jawab untuk menerjemahkan bytecode Java menjadi kode mesin yang dapat dijalankan oleh komputer target.</ol><br>Dalam kesimpulannya, Java adalah bahasa pemrograman yang sangat populer karena keunggulan platform independencenya. Java menggunakan teknologi JVM untuk memungkinkan program Java dijalankan di berbagai platform.<br><br><h2>Kelebihan dan Kekurangan Java</h2><br><h3>Kelebihan Java</h3><ol type="1"><li>Platform Independence,Java dapat dijalankan di berbagai platform, seperti Windows, Mac, dan Linux, karena Java menggunakan teknologi JVM yang dapat memahami bytecode Java dan mengubahnya menjadi kode mesin yang dapat dijalankan oleh komputer target. Hal ini memungkinkan pengembang untuk menulis program Java sekali dan menjalankannya di berbagai platform.<li>Object-Oriented Programming</li>Java didesain untuk menggunakan paradigma pemrograman berorientasi objek, yang memungkinkan pengembang untuk mengorganisir program mereka menjadi objek-objek yang memiliki karakteristik dan perilaku tertentu. Dengan menggunakan OOP, program Java menjadi lebih mudah dipahami, dikembangkan, dan dipelihara.<li>Memiliki Library yang Kaya</li>Java menyediakan library yang kaya dan luas yang memungkinkan pengembang untuk membangun program yang lebih efisien dan cepat. Library ini mencakup banyak fitur, seperti networking, I/O, GUI, database, dan masih banyak lagi.<li>Memiliki Dukungan Komunitas yang Besar</li>Java memiliki komunitas pengembang yang besar dan aktif, yang selalu memberikan dukungan dan memperbarui bahasa pemrograman Java. Hal ini memungkinkan pengembang untuk memperoleh dukungan dan solusi untuk masalah yang dihadapi.<li>Memiliki Keamanan yang Kuat</li>Java memiliki fitur keamanan yang kuat, seperti sandboxing, yang membatasi akses ke sumber daya sistem yang sensitif, seperti file sistem, jaringan, dan memori. Fitur ini memungkinkan program Java untuk berjalan dalam lingkungan yang aman dan terisolasi.</ol><br><h3>Kekurangan Java</h3><ol type="1"><li>Kinerja yang lambat,Java biasanya dianggap lebih lambat dibandingkan dengan bahasa pemrograman yang lebih rendah tingkat, seperti C++ dan Assembly. Hal ini karena JVM harus melakukan proses interpretasi dan Just-In-Time (JIT) compilation pada bytecode Java selama runtime, yang dapat memperlambat kinerja program.<li>Memakan banyak memori,Java membutuhkan memori yang cukup besar untuk menjalankan programnya. Hal ini disebabkan oleh JVM yang harus melakukan proses interpretasi dan JIT compilation pada bytecode Java, dan juga oleh kebutuhan memory manajemen yang tinggi.</li><li>Kurang Fleksibel,Java terkadang dianggap kurang fleksibel dibandingkan dengan bahasa pemrograman lainnya karena pengembang tidak dapat mengakses secara langsung sumber daya sistem yang sensitif, seperti jaringan dan file sistem. Hal ini disebabkan oleh fitur keamanan yang kuat yang dimiliki oleh Java.</li><li>Cukup sulit untuk dipelajar,Java memiliki kurva belajar yang cukup curam, terutama bagi pemula yang baru mulai belajar pemrograman. Hal ini disebabkan oleh banyaknya fitur dan konsep dalam bahasa pemrograman Java, seperti OOP dan concurrency.</ol>',
    authorName: 'Renaldi Nurmazid',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 03, 2021',
    cover: '/assets/images/java.png',
  },
  {
    id: 2,
    title: 'Praktikum Database',
    category: 'Database',
    subCategory: ['Backend', 'Data analist', 'fullstack'],
    desc:"Hallo semua nya... kembali lagi dengan mimin setelah beberapa hari yang lalu kita telah belajar mengenai materi database dari mulai apa itu database, field database, struktur database dan yang lainnya.Pada blog kali ini mimin akan membahas tentang beberapa praktikum database tentang apa yang telah di pelajari pada blog sebelumnya.",
    description:
      `Hallo semua nya... kembali lagi dengan mimin setelah beberapa hari yang lalu kita telah belajar mengenai materi database dari mulai apa itu database, field database, struktur database dan yang lainnya.Pada blog kali ini mimin akan membahas tentang beberapa praktikum database tentang apa yang telah di pelajari pada blog sebelumnya.<br><br><ol type="1"><li><strong>Create Table tb_pengguna</strong></li>Untuk membuat sebuah tabel dengan nama "tb_pengguna" kita bisa menggunakan query "CREATE TABLE" adapun ketentuan field yang harus di masukan yaitu Field "userid","nama","email",no_telp,dan inilah cara membuat tabel tersebut.<br><br><img src='/assets/images/praktikum/create tbl-pengguna.PNG' alt="..."><li><strong>Added Unique Into Table</strong></li>Untuk menambahkan constrain UNIQUE pada field "email" kita bisa menggunakan query ADD CONSTRAINT seperti contoh di bawah ini.<br><br><img src='/assets/images/praktikum/add unique constraint pengguna.PNG' alt="..."><li><strong>Added Index Into Table</strong></li>Index ini digunakan untuk mempercepat operasi pencarian atau pengurutan data,pada soal ini kita harus menambahkan index pada field <strong>“nama”,”no_telp”</strong>,kita bisa menambahkan index dengan query <strong>“ADD INDEX”</strong>,seperti contoh di bawah ini.<br><br><img src='/assets/images/praktikum/add index tb-pengguna.PNG' alt="..."><li><strong>Edit Field Data Type</strong></li>Pada soal kali ini saya coba mengubah lange atau batas isi dari sebuah type data <strong>“VARCHAR”</strong> dari yang asalnya memiliki batas isi 50 karakter menjadi 100 karakter.<br><br><img src='/assets/images/praktikum/modify data type.PNG' alt="..."><li><strong>Insert Data Into Table tb_pengguna</strong></li>Setelah kita membuat tabel dan mengatur field yang dimasukan pada soal sebelumnya,maka pada soal ini kita akan mengisi data pada tabel tersebut dengan query <strong>“INSERT INTO tb_pengguna VALUES (isi sesuai urutan field)”</strong>, seperti contoh berikut.<br><br><img src='/assets/images/praktikum/insert tb-pengguna.PNG' alt="..."><li><strong>Create Table tb_team</strong></li>Soal ini kita di haruskan membuat sebuah table dengan nama tb_team,seperti soal sebelum nya untuk membuat sebuah table kita bisa menggunakan query <strong>“CREATE TABLE”</strong>, seperti contoh di bawah ini.<br><br><img src='/assets/images/praktikum/create tb-team.PNG' alt="..."><li><strong>Create Table tb_koordinator</strong></li>Seperti contoh sebelum nya kita bisa membuat tabel dengan query <strong>“CREATE TABLE”</strong> adapun untuk field yang akan di buat pada tabel ini yaitu field <strong>“id_koordinator”,”nama”</strong>.<br><br><img src='/assets/images/praktikum/create tb-koordinator.PNG' alt="..."><li><strong>Add Constraint FOREIGN KEY</strong></li>Pada soal kali ini kita harus membuat constraint <strong>“FOREIGN KEY”</strong>agar tb_team dapat terhubung dengan tb_koordinator, kita dapat membuat itu dengan query <strong>“ALTER TABLE tb_team ADD CONSTRAINT fk_id_koordinator FOREIGN KEY (id_koordinator) REFERENCES tb_koordinator(id_koordinator) ON UPDATE CASCADE ON DELETE CASCADE;”</strong>,setelah succes makan akan menampilkan <strong>MULT</strong> pada id_koordinator yang berarti multiple atau berelasi, contohnya seperti gambar di bawah ini.<br><br><img src='/assets/images/praktikum/add foreign-key.PNG' alt="..."><li><strong>Insert Into Table tb_team And tb_koordinator</strong></li>Seperti pada soal sebelumnya kita dapat mengisi sebuah table dengan query <strong>“INSERT INTO tb_team(isi tabel)”</strong>, seperti contoh dibawah ini.<br><br><img src='/assets/images/praktikum/insert tb-team.PNG' alt="..."><br><br><img src='/assets/images/praktikum/insert tb-koordinator.PNG' alt="..."><li><strong>Get Data For Each Table Created for all fields</strong></li>Untuk mendapatkan data atau melihat sebuah data query yang dapat digunakan yaitu <strong>“SELECT * FROM nama_table”</strong> tanda bintang tersebut digunakan untuk menampilkan isi semua field dari sebuah table,seperti contoh di bawah ini.<br><br><img src='/assets/images/praktikum/select all field.PNG' alt="..."><li><strong>Get Data For Each Table Created for some fields</strong></li>Pada soal ini kita di haruskan menampilkan hanya beberapa field pilihan, kita bisa menampilkanya dengan query <strong>‘SELECT field1,fiel2 FROM nama_tabel1;’</strong>, contoh nya seperti gambar di bawah ini.<br><br><img src='/assets/images/praktikum/select some field.PNG' alt="..."><li><strong>Get Data From Tables Created Using Filter</strong></li>Memfilter sebuah data sangat dapat dilakukan pada sql,contoh nya pada tb_koordinator pada field nama saya akan menampilkan nama yang memiliki kata permana, maka kita bisa menggunakan contoh query <strong>‘SELECT * FROM tb_koordinator WHERE nama LIKE '%Permana%';</strong>, maka dari query di atas akan menghasilkan output seperti contoh di bawah ini.<br><br><img src='/assets/images/praktikum/get data using filter.PNG' alt="..."><li><strong>Get Data From Table tb_team And tb_koordinator Using Inner Join</strong></li>Untuk melakukan sebuah inner join kita bisa menggunakan query <strong>‘SELECT tb_team.nama_team, tb_koordinator.id_koordinator FROM tb_team INNER JOIN tb_koordinator ON tb_team.id_koordinator = tb_koordinator.id_koordinator;’</strong>, dari query tersebut maka akan keluar output seperti contoh di bawah ini.<br><br><img src='/assets/images/praktikum/Inner Join db-belajar.PNG' alt="..."><li><strong>Get Data From Table tb_team And tb_koordinator Using Left Join</strong></li>Untuk melakukan sebuah left join kita bisa menggunakan query <strong>‘ SELECT tb_team.*, tb_koordinator.* FROM tb_team LEFT JOIN tb_koordinator ON tb_team.id_koordinator = tb_koordinator.id_koordinator;’</strong>, LEFT JOIN memastikan bahwa semua baris dari tabel ‘tb_team’ akan ditampilkan, bahkan jika tidak ada baris yang cocok pada tabel ‘tb_koordinator’.<br><br><img src='/assets/images/praktikum/left join db-belajar.PNG' alt="..."><li><strong>Get Data From Table tb_team And tb_koordinator Using Right Join</strong></li>Untuk melakukan sebuah right join kita bisa menggunakan quey <strong>‘ SELECT tb_team.nama_team, tb_team.id_team, tb_koordinator.id_koordinator FROM tb_team RIGHT JOIN tb_koordinator ON tb_team.id_koordinator = tb_koordinator.id_koordinator;’</strong>, dari query ini maka akan menghasilkan output seperti contoh dibawah ini.<br><br><img src='/assets/images/praktikum/right join db-belajar.PNG' alt="..."><li><strong>Rename Tb_pengguna To Tb_anggota</strong></li>Untuk merubah atau me-rename nama tabel dalam sql kita bisa menggunakan query <strong>‘ RENAME TABLE tb_pengguna TO tb_anggota’.</strong><br><br><img src='/assets/images/praktikum/rename-table.PNG' alt="..."><li><strong>Add Column Team On Tb_anggota</strong></li>Pada soal kali ini kita diharuskan untuk menambahkan column team pada tabel anggota,untuk melakukan itu kita bisa menggunakan query <strong>‘ALTER TABLE ‘tb_anggota’ ADD ‘team’ VARCHAR(50) NULL DEFAULT NULL AFTER ‘No_Telp’;.</strong><br><br><img src='/assets/images/praktikum/add column-team.PNG' alt="..."><li><strong>Add Relation Between Tb_anggota And Tb_team</strong></li>Untuk melakukan relasi pada soal ini kita bisa menggunakan query <strong>‘ALTER TABLE tb_anggota CONSTRAINT fk_anggota_team FOREIGN KEY (team) REFERENCES tb_team(nama_team) ON UPDATE CASCADE ON DELETE CASCADE;</strong><br><br><img src='/assets/images/praktikum/fk tb anggota-tb team.PNG' alt="..."><li><strong>Truncate All Tables</strong></li>Untuk melakukan truncate pada tabel,kita perlu menonaktifkan atau setting foreign key nya terlebih dahulu dengan query <strong>‘ SET FOREIGN_KEY_CHECKS = 0;’</strong>. Setelah itu baru kita bisa melakukan truncate pada tabel dengan query <strong>‘TRUNCATE TABLE nama_table;’</strong> dan setelah selesai semua,kita bisa set kembali foreign key dengan query <strong>‘ SET FOREIGN_KEY_CHECKS = 1;’</strong><br><br><img src='/assets/images/praktikum/truncate table.PNG' alt="..."><li><strong>Insert Data Into Table tb_koordinator</strong></li>Untuk menjawab soal kali ini,seperti soal-soal sebelumnya untuk melakukan pengisian data pada sebuah tabel kita bisa menggunakan query <strong>‘INSERT INTO nama_tabel (field1,field2) VALUES ('data1','data2');’</strong>.<br><br><img src='/assets/images/praktikum/insert data tb_koordinator.PNG' alt="..."><li><strong>Insert Data Into Table tb_team</strong></li><br><br><img src='/assets/images/praktikum/inser tb_team.PNG' alt="..."><li><strong>Insert Data Into Table tb_anggota</strong></li><br><br><img src='/assets/images/praktikum/insert tb-anggota.PNG' alt="...">Pada soal kali ini kita diharuskan memasukan minimal 60 data,maka kita bisa menggunakan query <strong>‘INSERT INTO’</strong> kembali seperti pada contoh soal sebelum nya.<br><strong>Hasil Insert Data :</strong><br><br><img src='/assets/images/praktikum/insert 60 data1.PNG' alt="..."><br><br><img src='/assets/images/praktikum/insert 60 data.PNG' alt="..."><li><strong>Get Data From All Tables With Null Data From Table Tb_koordinator</strong></li>Untuk menjawab soal ini kita bisa menggunakan <strong>RIGHT JOIN</strong> dengan contoh query <strong>‘SELECT a.nama AS name_anggota, b.nama_team, c.nama AS nama_koordinator FROM tb_anggota AS a RIGHT JOIN tb_team AS b ON a.team = b.nama_team RIGHT JOIN tb_koordinator AS c ON b.id_koordinator = c.id_koordinator;’</strong>.<br><br><img src='/assets/images/praktikum/get data tb-koordinator with null.PNG' alt="..."><li><strong>Get Data From All Tables Without Null Data From Table Tb_koordinator</strong></li>Untuk menjawab soal ini kita bisa menggunakan <strong>‘INNER JOIN’</strong> dengan contoh query <strong>‘SELECT a.nama AS name_anggota, b.nama_team, c.nama AS nama_koordinator FROM tb_anggota AS a INNER JOIN tb_team AS b ON a.team = b.nama_team INNER JOIN tb_koordinator AS c ON b.id_koordinator = c.id_koordinator;’</strong><br><br><img src='/assets/images/praktikum/get data tb-koordinator with not null.PNG' alt="..."><li><strong>Get Data only field fullname from tb_koordinator and fullname from tb_anggota without null data</strong></li>Untuk menjawab soal ini kita bisa menggunakan contoh query <strong>‘SELECT c.nama AS nama_koordinator, a.Nama AS nama_anggota FROM tb_anggota AS a INNER JOIN tb_team AS  ON a.team = b.nama_team INNER JOIN tb_koordinator AS c ON b.id_koordinator = c.id_koordinator;’</strong><br><br><img src='/assets/images/praktikum/get data from tb-anggota and tb-koordinator.PNG' alt="..."><li><strong>Get Data only field fullname from tb_koordinator and fullname from tb_anggota with null data</strong></li><strong>Query :</strong><br><strong>'select c.nama as nama_koordinator, a.nama as nama_anggota from tb_anggota as a right join tb_team as b on a.team = b.nama_team right join tb_koordinator as c on b.id_koordinator = c.id_koordinator;'</strong><br><br><img src='/assets/images/praktikum/nomor 26.PNG' alt="..."><li><strong>Get Data From All Tables Sort By Fullname From Tb_anggota Alphabetically</strong></li>Untuk menjawab soal ini kota bisa menggunakan fungsi ASC dengan contoh query <strong>‘SELECT a.Nama as nama_anggota, b.nama_team, c.nama AS nama_koordinator from tb_anggota AS a LEFT JOIN tb_team AS b ON a.team = b.nama_team LEFT JOIN tb_koordinator AS c ON b.id_koordinator = c.id_koordinator ORDER BY a.Nama ASC;’</strong><br><br><img src='/assets/images/praktikum/nomor 27.PNG' alt="..."><li><strong>Count The Number Of Members Based On The Team</strong></li>Untuk menjawab soal ini kita bisa menggunakan query <strong>‘SELECT c.nama AS nama_koordinator, count(a.Userid) AS jumlah_anggota FROM tb_anggota AS a LEFT JOIN tb_team AS b ON a.team = b.nama_team LEFT JOIN tb_koordinator AS c ON b.id_koordinator = c.id_koordinator GROUP BY b.nama_team;’</strong><br><br><img src='/assets/images/praktikum/count jumlah anggota setiap team.PNG' alt="..."><li><strong>Count The Number Of Members Based On Fullname On Tb_koordinator That Has Members More Than Or Equal To 5.</strong></li>Untuk menjawab soal ini kita bisa menggunakan query <strong>‘SELECT c.nama AS nama_koordinator, count(a.Userid) AS jumlah_anggota FROM tb_anggota AS a RIGHT JOIN tb_team AS b ON a.team = b.nama_team RIGHT JOIN tb_koordinator AS c ON b.id_koordinator = c.id_koordinator GROUP BY c.nama HAVING COUNT(a.Userid);’</strong><br><br><img src='/assets/images/praktikum/count data yang lebih dari 5.PNG' alt="..."><li><strong>Create View From Data On Point 26</strong></li>Untuk membuat create view kita bisa gunakan query seperti contoh ini,query 'CREATE VIEW view_koordinator_anggota as select c.nama as nama_koordinator, a.nama as nama_anggota from tb_anggota as a right join tb_team as b on a.team = b.nama_team right join tb_koordinator as c on b.id_koordinator = c.id_koordinator;', dari view yang telah kita buat maka akan menampilkan nama anggota berikut nama team nya.<br><br><img src='/assets/images/praktikum/view show.PNG' alt="..."><strong>Output :</strong><br><br><br><img src='/assets/images/praktikum/view poin 26.PNG' alt="..."><li><strong>Create Temporary Table From Data On Point 26</strong></li>Untuk membuat sebuah temporary table kita bisa menggunakan query 'CREATE TABLE temp_koordinator_anggota AS select c.nama as nama_koordinator, a.nama as nama_anggota from tb_anggota as a right join tb_team as b on a.team = b.nama_team right join tb_koordinator as c on b.id_koordinator = c.id_koordinator;'<br><br><img src='/assets/images/praktikum/rename temp.PNG' alt="..."><li><strong>Added Unique Into Table</strong></li><li><strong>Added Unique Into Table</strong></li><li><strong>Added Unique Into Table</strong></li><li><strong>Added Unique Into Table</strong></li><li><strong>Added Unique Into Table</strong></li><li><strong>Added Unique Into Table</strong></li><li><strong>Added Unique Into Table</strong></li></ol>`,
    authorName: 'Renaldi Nurmazid',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 03, 2021',
    cover: '/assets/images/praktikum database.png',
  },
  {
    id: 3,
    title: 'Apa itu Inner Join - Database',
    category: 'Database',
    subCategory: ['Backend', 'Data analist', 'fullstack'],
    desc:"Inner join adalah salah satu jenis operasi gabungan (join) dalam database yang memungkinkan kita untuk menggabungkan data dari dua tabel berdasarkan kolom yang memiliki nilai yang sama di kedua tabel tersebut. Dalam kata lain, inner join akan menghasilkan hanya baris yang terdapat nilai yang cocok di kedua tabel. Inner join mengambil data yang ada di kedua tabel yang terkait dan menggabungkannya menjadi satu tabel sementara data yang tidak terkait tidak ditampilkan dalam hasil output.",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: 'Renaldi Nurmazid',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 03, 2021',
    cover: '/assets/images/INNER JOIN.png',
  },
  {
    id: 4,
    title: 'Left Join - Database',
    category: 'Database',
    subCategory: ['adrenaline', 'stay-fit', 'lifestyle'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: 'Renaldi Nurmazid',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 03, 2021',
    cover: '/assets/images/LEFT JOIN.png',
  },
  {
    id: 5,
    title: 'Right Join - Database',
    category: 'Database',
    subCategory: ['bbq', 'food', 'lifestyle'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: 'Renaldi Nurmazid',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 03, 2021',
    cover: '/assets/images/RIGHT JOIN.png',
  },
  {
    id: 6,
    title: 'Transaction Control Language ',
    category: 'Database',
    subCategory: ['beaches', 'sea', 'holidays'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: 'Renaldi Nurmazid',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 03, 2021',
    cover:
      '/assets/images/Purple-Combination-colors-graphic-design-predictions-1024x576-1024x576.jpg',
  },
  {
    id: 7,
    title: 'Relasi Database',
    category: 'Database',
    subCategory: ['skill', 'design', 'passion'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: 'Renaldi Nurmazid',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 03, 2021',
    cover: '/assets/images/Synthwave-Postmodern.jpg',
  },
  {
    id: 7,
    title: 'Normalisasi Database',
    category: 'Database',
    subCategory: ['skill', 'design', 'passion'],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    authorName: 'Renaldi Nurmazid',
    authorAvatar: '/assets/images/author.jpg',
    createdAt: 'June 03, 2021',
    cover: '/assets/images/Synthwave-Postmodern.jpg',
  },
];

