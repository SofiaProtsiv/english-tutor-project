const teamList = [
  {
    devName: "Світлана Луценко",
    position: "PM",
    linkedIn: "https://www.linkedin.com/in/svitlana-lutsenko-/",
    pathToPhotoPNG: "team-modal-photo/svitlana-lutsenko.png",
    pathToPhotoWebP: "team-modal-photo/svitlana-lutsenko-webp.webp",
    description: "Svitlana-Lutsenko",
    key: "svitlanaLutsenko",
  },
  {
    devName: "Софія Проців",
    position: "Mentor, technical specialist",
    linkedIn: "https://www.linkedin.com/in/sofiaaprotsiv/",
    pathToPhotoPNG: "team-modal-photo/sofia-protsiv.png",
    pathToPhotoWebP: "team-modal-photo/sofia-protsiv-webp.webp",
    description: "Sofia-Protsiv",
    key: "sofiaProtsiv",
  },
  {
    devName: "Чудова Євгенія",
    position: "QA team lead",
    linkedIn: "https://www.linkedin.com/in/jenya-chudova/",
    pathToPhotoPNG: "team-modal-photo/yevheniia-chudova.png",
    pathToPhotoWebP: "team-modal-photo/yevheniia-chudova-webp.webp",
    description: "Yevheniia-Chudova",
    key: "yevheniiaChudova",
  },
  {
    devName: "Ірина Хамоум",
    position: "Developer",
    linkedIn: "https://www.linkedin.com/in/iryna-hamoum-98760b295/",
    pathToPhotoPNG: "team-modal-photo/iryna-hamoum.png",
    pathToPhotoWebP: "team-modal-photo/iryna-hamoum-webp.webp",
    description: "Iryna-Hamoum",
    key: "irynaHamoum",
  },
  {
    devName: "Олександра Гусар",
    position: "Developer",
    linkedIn: "https://www.linkedin.com/in/o-husar-fsdev/",
    pathToPhotoPNG: "team-modal-photo/oleksandra-husar.png",
    pathToPhotoWebP: "team-modal-photo/oleksandra-husar-webp.webp",
    description: "Oleksandra-Husar",
    key: "oleksandraHusar",
  },
  {
    devName: "Дарина Ладецька",
    position: "QA",
    linkedIn: "https://www.linkedin.com/in/daryna-ladetska/",
    pathToPhotoPNG: "team-modal-photo/daryna-ladetska.png",
    pathToPhotoWebP: "team-modal-photo/daryna-ladetska-webp.webp",
    description: "Daryna-Ladetska",
    key: "darynaLadetska",
  },
  {
    devName: "Світлана Нижнікова",
    position: "QA",
    linkedIn: "https://www.linkedin.com/in/svitlana-nyzhnikova",
    pathToPhotoPNG: "team-modal-photo/svitlana-nyzhnikova.png",
    pathToPhotoWebP: "team-modal-photo/svitlana-nyzhnikova-webp.webp",
    description: "Svitlana-Nyzhnikova",
    key: "svitlanaNyzhnikova",
  },
  {
    devName: "Єлизавета Мала",
    position: "Developer",
    linkedIn: "https://www.linkedin.com/in/yelyzaveta-mala-6535092b1/",
    pathToPhotoPNG: "team-modal-photo/yelyzaveta-mala.png",
    pathToPhotoWebP: "team-modal-photo/yelyzaveta-mala-webp.webp",
    description: "Yelyzaveta-Mala",
    key: "yelyzavetaMala",
  },
  {
    devName: "Сніцаренко Карина",
    position: "Developer",
    linkedIn: "https://www.linkedin.com/in/karina-snitsarenko-9272212b9/",
    pathToPhotoPNG: "team-modal-photo/karyna-snitsarenko.png",
    pathToPhotoWebP: "team-modal-photo/karyna-snitsarenko-webp.webp",
    description: "Karyna-Snitsarenko",
    key: "karynaSnitsarenko",
  },
  {
    devName: "Марія Жорник",
    position: "Developer",
    linkedIn: "https://www.linkedin.com/in/mariia-zhornyk-bb6325301/",
    pathToPhotoPNG: "team-modal-photo/mariia-zhornyk.png",
    pathToPhotoWebP: "team-modal-photo/mariia-zhornyk-webp.webp",
    description: "Mariia-Zhornyk",
    key: "mariiaZhornyk",
  },
  {
    devName: "Скоробагата Анастасія",
    position: "Developer",
    linkedIn: "https://www.linkedin.com/in/anastasia-skorobagata-41a614209/",
    pathToPhotoPNG: "team-modal-photo/anastasiia-skorobahata.png",
    pathToPhotoWebP: "team-modal-photo/anastasiia-skorobahata-webp.webp",
    description: "Anastasiia-Skorobahata",
    key: "anastasiiaSkorobahata",
  },
  {
    devName: "Євгеній Петровський",
    position: "Developer",
    linkedIn: "https://www.linkedin.com/in/yevhenii-petrovskyi/",
    pathToPhotoPNG: "team-modal-photo/yevhenii-petrovskyi.png",
    pathToPhotoWebP: "team-modal-photo/yevhenii-petrovskyi-webp.webp",
    description: "Yevhenii-Petrovskyi",
    key: "yevheniiPetrovskyi",
  },
  {
    devName: "Щетиніна Ганна",
    position: "Developer",
    linkedIn: "https://www.linkedin.com/in/anna-shchetynina",
    pathToPhotoPNG: "team-modal-photo/hanna-shchetynina.png",
    pathToPhotoWebP: "team-modal-photo/hanna-shchetynina-webp.webp",
    description: "Hanna-Shchetynina",
    key: "hannaShchetynina",
  },
  {
    devName: "Лукомська Юлія",
    position: "Developer",
    linkedIn: "https://www.linkedin.com/in/yuliia-lukomska-9a84002b3/",
    pathToPhotoPNG: "team-modal-photo/missing-photo.png",
    pathToPhotoWebP: "team-modal-photo/missing-photo-webp.webp",
    description: "Yuliia-Lukomska",
    key: "yuliiaLukomska",
  },
  {
    devName: "Зеник Філь",
    position: "Developer",
    linkedIn: "http://linkedin.com/in/zenoviy-fil",
    pathToPhotoPNG: "team-modal-photo/zenuk-fil.png",
    pathToPhotoWebP: "team-modal-photo/zenuk-fil-webp.webp",
    description: "Zenuk-Fil",
    key: "zenukFil",
  },
  {
    devName: "Прусова Марина",
    position: "QA",
    linkedIn: "https://www.linkedin.com/in/maryna-prusova",
    pathToPhotoPNG: "team-modal-photo/maryna-prusova.png",
    pathToPhotoWebP: "team-modal-photo/maryna-prusova-webp.webp",
    description: "Maryna-Prusova",
    key: "marynaPrusova",
  },
  {
    devName: "Сєрікова Олена",
    position: "QA",
    linkedIn: "https://www.linkedin.com/in/elena-serikova-b26a521a6",
    pathToPhotoPNG: "team-modal-photo/olena-sierikova.png",
    pathToPhotoWebP: "team-modal-photo/olena-sierikova-webp.webp",
    description: "Olena-Sierikova",
    key: "olenaSierikova",
  },
  {
    devName: "Дядченко Наталія",
    position: "QA",
    linkedIn: "https://www.linkedin.com/in/nataliia-diadchenko-ukraine2024",
    pathToPhotoPNG: "team-modal-photo/missing-photo.png",
    pathToPhotoWebP: "team-modal-photo/missing-photo-webp.webp",
    description: "Nataliia-Diadchenko",
    key: "nataliiaDiadchenko",
  },
];

export default teamList;