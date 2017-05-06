(function(){
  angular.module("superheroPhoneBook", [])
  .controller("SuperherosController", [
    SuperherosControllerFunction
  ])
    function SuperherosControllerFunction() {
      this.superheros = [{
        name:'Superman',
        phoneNumber:'298-345-0959',
        comicAffiliation:'Marvel',
        img:'https://upload.wikimedia.org/wikipedia/en/e/eb/SupermanRoss.png'
      },{
        name:'Batman',
        phoneNumber:'977-345-0989',
        comicAffiliation:'DC',
        img:'https://upload.wikimedia.org/wikipedia/en/1/17/Batman-BenAffleck.jpg'
      },{
        name:'Spiderman',
        phoneNumber:'844-200-4001',
        comicAffiliation:'Marvel',
        img:'http://vignette1.wikia.nocookie.net/superheroes/images/b/be/Spider_Man.jpg/revision/latest?cb=20140326175455'
      },{
        name:'Flash',
        phoneNumber:'428-098-8921',
        comicAffiliation:'DC',
        img:'https://vignette2.wikia.nocookie.net/superheroes/images/2/24/Flash.jpg/revision/latest?cb=20140203094110'
      },{
        name:'Hulk',
        phoneNumber:'680-555-7711',
        comicAffiliation:'Marvel',
        img:'https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_%28comics_character%29.png'
      }],
       this.addSuperhero = function(){
        let superhero = {name: this.name, phoneNumber: this.phoneNumber, comicAffiliation: this.comicAffiliation, img: this.photo_url, completed: false}
        this.superheros.push(superhero)
      }
    }

})()
