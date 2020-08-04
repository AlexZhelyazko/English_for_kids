const sticks = document.getElementById('menu-toggle');
const burger_menu = document.getElementById('menu-block');
document.addEventListener('click',function (e) {
    if(sticks.classList.contains('open') && burger_menu.classList.contains('show')){
        sticks.classList.toggle("open");
        burger_menu.classList.toggle('show');
    }
    if((e.target.id === 'cross' || e.target.id === 'hamburger') && sticks.classList.contains('open')===false){
        sticks.classList.toggle("open");
        burger_menu.classList.toggle('show');
    }
});
    let category_links = document.getElementsByClassName('category-link');
Array.from(category_links).forEach((link)=>{
    link.addEventListener('click',(el)=>{
        Array.from(category_links).forEach(src=>{
            src.style.textDecoration='none';
        });
        mainpage_link.style.textDecoration='none';
        el.target.style.textDecoration="underline";
        document.getElementById('category-label').style.display='block';
        document.getElementById('category').style.display="block";
        document.getElementById('main').style.display="none";
        document.getElementById('menu-toggle').classList.toggle("open");
        document.getElementById('menu-block').classList.toggle('show');
        categoryFunc(el.target.textContent);
    })
});
let mainpage_link = document.getElementsByClassName('mainpage-link')[0];
mainpage_link.addEventListener('click',(el)=>{
    Array.from(category_links).forEach(src=>{
        src.style.textDecoration='none';
    });
    el.target.style.textDecoration="underline";
    document.getElementById('category-label').style.display='none';
    document.getElementById('category').style.display="none";
    document.getElementById('main').style.display="block";
    document.getElementById('menu-toggle').classList.toggle("open");
    document.getElementById('menu-block').classList.toggle('show');
});
//////////////////////////

    class Card{
        constructor(name, image){
            this.name = name;
            this.image = image;
        }
    }

let card1 = new Card("Action (set A)", "url('assets/dance.jpg')");
let card2 = new Card("Action (set B)", "url('assets/swim.jpg')");
let card3 = new Card("Action (set C)", "url('assets/drop.jpg')");
let card4 = new Card("Adjective", "url('assets/children2.jpg')");
let card5 = new Card("Animal (set A)", "url('assets/cat.jpg')");
let card6 = new Card("Animal (set B)", "url('assets/dance.jpg')");
let card7 = new Card("Clothes", "url('assets/blouse.jpg')");
let card8 = new Card("Emotion", "url('assets/smile.jpg')");

let arrayCards = [card1, card2, card3, card4, card5, card6, card7, card8];

createCards(arrayCards);





function categoryFunc(topic) {
    if (document.getElementById('category-cards').hasChildNodes()) {
        let c_c = document.getElementsByClassName('category-card');
        Array.from(c_c).forEach(el => {
            document.getElementById('category-cards').removeChild(el);
        })
    }
    let category_cards = createCardsData();
    document.getElementsByClassName('category-label')[0].innerText = topic;
    Array.from(category_cards).forEach(card => {
        if (card.category === topic) {
            createCategoryCard(card);
        }
    });

    function createCategoryCard(card) {
        const category = document.getElementById('category-cards');

        const category_card = document.createElement('div');
        category_card.classList.add('card');
        category_card.classList.add('category-card');
        category_card.addEventListener('mouseout', function (el) {
                el.target.parentElement.parentElement.style.transform = 'rotateY(0)';
        });

        const category_card_front = document.createElement('div');
        category_card_front.classList.add('category-card-front');
        const category_card_back = document.createElement('div');
        category_card_back.classList.add('category-card-back');

        const category_card_upperpart = document.createElement('div');
        category_card_upperpart.classList.add('card-upperpart');
        category_card_upperpart.style.backgroundImage =  card.image ;
        category_card_upperpart.style.backgroundRepeat = "no-repeat";
        category_card_upperpart.style.backgroundSize = "cover";

        const category_card_back_upperpart = document.createElement('div');
        category_card_back_upperpart.classList.add('card-upperpart');
        category_card_back_upperpart.style.backgroundImage =  card.image ;
        category_card_back_upperpart.style.backgroundRepeat = "no-repeat";
        category_card_back_upperpart.style.backgroundSize = "cover";

        const category_card_lowerpart = document.createElement('div');
        category_card_lowerpart.classList.add('card-lowerpart');

        const category_card_back_lowerpart = document.createElement('div');
        category_card_back_lowerpart.classList.add('card-lowerpart');


        const category_card_span = document.createElement('span');
        category_card_span.classList.add('topic-name');
        category_card_span.classList.add('card-name');
        category_card_span.textContent = card.word;

        const category_card_back_span = document.createElement('span');
        category_card_back_span.classList.add('topic-name');
        category_card_back_span.classList.add('card-name');
        category_card_back_span.textContent = card.translation;

        const rotate = document.createElement('i');
        rotate.classList.add('fas');
        rotate.classList.add('fa-sync-alt');

        const sound = document.createElement('i');
        sound.classList.add('fas');
        sound.classList.add('fa-volume-up');
        sound.addEventListener('click',function (el) {
            new Audio(card.audio).play();
            updateStorage(el);
        });

        rotate.addEventListener('click', function (el) {
            let parent = el.target.parentElement.parentElement.parentElement;
            parent.style.transform = 'rotateY(180deg)';
            updateStorage(el);
        });

        category.append(category_card);

        category_card.append(category_card_front);
        category_card.append(category_card_back);

        category_card_front.append(category_card_upperpart);
        category_card_front.append(category_card_lowerpart);

        category_card_back.append(category_card_back_upperpart);
        category_card_back.append(category_card_back_lowerpart);

        category_card_upperpart.append(rotate);
        category_card_upperpart.append(sound);


        category_card_lowerpart.append(category_card_span);
        category_card_back_lowerpart.append(category_card_back_span);

    }
}

 function updateStorage(el){
    let word = el.target.parentElement.textContent;
    for(let i = 1 ;i<65;i++){
        let key = 'word_' + i;
        let jsonString = localStorage.getItem(key);
        let obj = JSON.parse(jsonString);
    }
}
 function createCardsData() {
    class CategoryCard {
        constructor(word, image, translation, category,audio) {
            this.word = word;
            this.image = image;
            this.translation = translation;
            this.category = category;
            this.audio = audio;
        }
    }

    const category_cards = [];
    let card_1 = new CategoryCard('cry', 'url("assets/cry.jpg")', 'плакать', 'Action (set A)','assets/cry.mp3');
    category_cards.push(card_1);
    let card_2 = new CategoryCard('dance', 'url("assets/dance.jpg")', 'танцевать', 'Action (set A)','assets/dance.mp3');
    category_cards.push(card_2);
    let card_3 = new CategoryCard('dive', 'url("assets/dive.jpg")', 'нырять', 'Action (set A)','assets/dive.mp3');
    category_cards.push(card_3);
    let card_4 = new CategoryCard('draw', 'url("assets/draw.jpg")', 'рисовать', 'Action (set A)','assets/draw.mp3');
    category_cards.push(card_4);
    let card_5 = new CategoryCard('fish', 'url("assets/fish.jpg")', 'ловить рыбу', 'Action (set A)','assets/fish.mp3');
    category_cards.push(card_5);
    let card_6 = new CategoryCard('fly', 'url("assets/fly.jpg")', 'летать', 'Action (set A)','assets/fly.mp3');
    category_cards.push(card_6);
    let card_7 = new CategoryCard('hug', 'url("assets/hug.jpg")', 'обнимать', 'Action (set A)','assets/hug.mp3');
    category_cards.push(card_7);
    let card_8 = new CategoryCard('jump', 'url("assets/jump.jpg")', 'прыгать', 'Action (set A)','assets/jump.mp3');
    category_cards.push(card_8);
    let card_9 = new CategoryCard('open', 'url("assets/open.jpg")', 'открывать', 'Action (set B)','assets/open.mp3');
    category_cards.push(card_9);
    let card_10 = new CategoryCard('play', 'url("assets/play.jpg")', 'играть', 'Action (set B)','assets/play.mp3');
    category_cards.push(card_10);
    let card_11 = new CategoryCard('point','url("assets/point.jpg")', 'указывать', 'Action (set B)','assets/point.mp3');
    category_cards.push(card_11);
    let card_12 = new CategoryCard('ride', 'url("assets/ride.jpg")', 'ездить верхом', 'Action (set B)','assets/ride.mp3');
    category_cards.push(card_12);
    let card_13 = new CategoryCard('run', 'url("assets/run.jpg")', 'бежать', 'Action (set B)','assets/run.mp3');
    category_cards.push(card_13);
    let card_14 = new CategoryCard('sing', 'url("assets/sing.jpg")', 'петь', 'Action (set B)','assets/sing.mp3');
    category_cards.push(card_14);
    let card_15 = new CategoryCard('skip', 'url("assets/skip.jpg")', 'прыгать', 'Action (set B)','assets/skip.mp3');
    category_cards.push(card_15);
    let card_16 = new CategoryCard('swim', 'url("assets/swim.jpg")', 'плавать', 'Action (set B)','assets/swim.mp3');
    category_cards.push(card_16);
    let card_17 = new CategoryCard('argue', 'url("assets/argue.jpg")', 'спорить', 'Action (set C)','assets/argue.mp3');
    category_cards.push(card_17);
    let card_18 = new CategoryCard('build', 'url("assets/build.jpg")', 'строить', 'Action (set C)','assets/build.mp3');
    category_cards.push(card_18);
    let card_19 = new CategoryCard('carry', 'url("assets/carry.jpg")', 'нести', 'Action (set C)','assets/carry.mp3');
    category_cards.push(card_19);
    let card_20 = new CategoryCard('catch', 'url("assets/catch.jpg")', 'ловить', 'Action (set C)','assets/catch.mp3');
    category_cards.push(card_20);
    let card_21 = new CategoryCard('drive', 'url("assets/drive.jpg")', 'водить', 'Action (set C)','assets/drive.mp3');
    category_cards.push(card_21);
    let card_22 = new CategoryCard('drop', 'url("assets/drop.jpg")', 'падать', 'Action (set C)','assets/drop.mp3');
    category_cards.push(card_22);
    let card_23 = new CategoryCard('pull', 'url("assets/pull.jpg")', 'тянуть', 'Action (set C)','assets/pull.mp3');
    category_cards.push(card_23);
    let card_24 = new CategoryCard('push', 'url("assets/push.jpg")', 'толкать', 'Action (set C)','assets/push.mp3');
    category_cards.push(card_24);
    let card_25 = new CategoryCard('big', 'url("assets/big.jpg")', 'большой', 'Adjective','assets/big.mp3');
    category_cards.push(card_25);
    let card_26 = new CategoryCard('small', 'url("assets/small.jpg")', 'маленький', 'Adjective','assets/small.mp3');
    category_cards.push(card_26);
    let card_27 = new CategoryCard('fast', 'url("assets/fast.jpg")', 'быстрый', 'Adjective','assets/fast.mp3');
    category_cards.push(card_27);
    let card_28 = new CategoryCard('slow', 'url("assets/slow.jpg")', 'медленный', 'Adjective','assets/slow.mp3');
    category_cards.push(card_28);
    let card_29 = new CategoryCard('friendly', 'url("assets/friendly.jpg")', 'дружелюбный', 'Adjective','assets/friendly.mp3');
    category_cards.push(card_29);
    let card_30 = new CategoryCard('unfriendly', 'url("assets/unfriendly.jpg")', 'недружелюбный', 'Adjective','assets/unfriendly.mp3');
    category_cards.push(card_30);
    let card_31 = new CategoryCard('young', 'url("assets/young.jpg")', 'молодой', 'Adjective','assets/young.mp3');
    category_cards.push(card_31);
    let card_32 = new CategoryCard('old', 'url("assets/old.jpg")', 'старый', 'Adjective','assets/old.mp3');
    category_cards.push(card_32);
    let card_33 = new CategoryCard('cat', 'url("assets/cat.jpg")', 'кот', 'Animal (set A)','assets/cat.mp3');
    category_cards.push(card_33);
    let card_34 = new CategoryCard('chick', 'url("assets/chick.jpg")', 'цыпленок', 'Animal (set A)','assets/chick.mp3');
    category_cards.push(card_34);
    let card_35 = new CategoryCard('chicken', 'url("assets/chicken.jpg")', 'курица', 'Animal (set A)','assets/chicken.mp3');
    category_cards.push(card_35);
    let card_36 = new CategoryCard('dog', 'url("assets/dog.jpg")', 'собака', 'Animal (set A)','assets/dog.mp3');
    category_cards.push(card_36);
    let card_37 = new CategoryCard('horse', 'url("assets/horse.jpg")', 'лошадь', 'Animal (set A)','assets/horse.mp3');
    category_cards.push(card_37);
    let card_38 = new CategoryCard('pig', 'url("assets/pig.jpg")', 'свинья', 'Animal (set A)','assets/pig.mp3');
    category_cards.push(card_38);
    let card_39 = new CategoryCard('rabbit', 'url("assets/rabbit.jpg")', 'заяц', 'Animal (set A)','assets/rabbit.mp3');
    category_cards.push(card_39);
    let card_40 = new CategoryCard('sheep', 'url("assets/sheep.jpg")', 'овечка', 'Animal (set A)','assets/sheep.mp3');
    category_cards.push(card_40);
    let card_41 = new CategoryCard('bird', 'url("assets/bird.jpg")', 'птица', 'Animal (set B)','assets/bird.mp3');
    category_cards.push(card_41);
    let card_42 = new CategoryCard('fish', 'url("assets/fish1.jpg")', 'рыба', 'Animal (set B)','assets/fish.mp3');
    category_cards.push(card_42);
    let card_43 = new CategoryCard('frog', 'url("assets/frog.jpg")', 'лягушка', 'Animal (set B)','assets/frog.mp3');
    category_cards.push(card_43);
    let card_44 = new CategoryCard('giraffe', 'url("assets/giraffe.jpg")', 'жираф', 'Animal (set B)','assets/giraffe.mp3');
    category_cards.push(card_44);
    let card_45 = new CategoryCard('lion', 'url("assets/lion.jpg")', 'лев', 'Animal (set B)','assets/lion.mp3');
    category_cards.push(card_45);
    let card_46 = new CategoryCard('mouse', 'url("assets/mouse.jpg")', 'мышка', 'Animal (set B)','assets/mouse.mp3');
    category_cards.push(card_46);
    let card_47 = new CategoryCard('turtle', 'url("assets/turtle.jpg")', 'черепаха', 'Animal (set B)','assets/turtle.mp3');
    category_cards.push(card_47);
    let card_48 = new CategoryCard('dolphin', 'url("assets/dolphin.jpg")', 'дельфин', 'Animal (set B)','assets/dolphin.mp3');
    category_cards.push(card_48);
    let card_49 = new CategoryCard('skirt', 'url("assets/skirt.jpg")', 'юбка', 'Clothes','assets/skirt.mp3');
    category_cards.push(card_49);
    let card_50 = new CategoryCard('pants','url("assets/pants.jpg")', 'штаны', 'Clothes','assets/pants.mp3');
    category_cards.push(card_50);
    let card_51 = new CategoryCard('blouse', 'url("assets/blouse.jpg")', 'блузка', 'Clothes','assets/blouse.mp3');
    category_cards.push(card_51);
    let card_52 = new CategoryCard('dress', 'url("assets/dress.jpg")', 'платье', 'Clothes','assets/dress.mp3');
    category_cards.push(card_52);
    let card_53 = new CategoryCard('boots', 'url("assets/boot.jpg")', 'кроссовки', 'Clothes','assets/boots.mp3');
    category_cards.push(card_53);
    let card_54 = new CategoryCard('shirt', 'url("assets/shirt.jpg")', 'рубашка', 'Clothes','assets/shirt.mp3');
    category_cards.push(card_54);
    let card_55 = new CategoryCard('coat', 'url("assets/coat.jpg")', 'куртка', 'Clothes','assets/coat.mp3');
    category_cards.push(card_55);
    let card_56 = new CategoryCard('shoe', 'url("assets/shoe.jpg")', 'туфли', 'Clothes','assets/shoe.mp3');
    category_cards.push(card_56);
    let card_57 = new CategoryCard('sad', 'url("assets/sad.jpg")', 'грустный', 'Emotion','assets/sad.mp3');
    category_cards.push(card_57);
    let card_58 = new CategoryCard('angry', 'url("assets/angry.jpg")', 'злой', 'Emotion','assets/angry.mp3');
    category_cards.push(card_58);
    let card_59 = new CategoryCard('happy', 'url("assets/happy.jpg")', 'счастливый', 'Emotion','assets/happy.mp3');
    category_cards.push(card_59);
    let card_60 = new CategoryCard('tired', 'url("assets/tired.jpg")', 'уставший', 'Emotion','assets/tired.mp3');
    category_cards.push(card_60);
    let card_61 = new CategoryCard('surprised', 'url("assets/surprised.jpg")', 'удивленный', 'Emotion','assets/surprised.mp3');
    category_cards.push(card_61);
    let card_62 = new CategoryCard('scared', 'url("assets/scared.jpg")', 'напуганный', 'Emotion','assets/scared.mp3');
    category_cards.push(card_62);
    let card_63 = new CategoryCard('smile', 'url("assets/smile.jpg")', 'улыбка', 'Emotion','assets/smile.mp3');
    category_cards.push(card_63);
    let card_64 = new CategoryCard('laugh', 'url("assets/laugh.jpg")', 'смех', 'Emotion','assets/laugh.mp3');
    category_cards.push(card_64);

    let i = 1;
    if(localStorage.length === 0) {
        category_cards.forEach(card => {
            let obj = new Object();
            obj.word = card.word;
            obj.topic = card.category;
            obj.translation = card.translation;
            obj.click = 0;
            obj.answered = 0;
            obj.mistake = 0;
            obj.percents = 0;
            obj.image = card.image;
            obj.audio = card.audio;
            let key = 'word_' + i;
            localStorage.setItem(key, JSON.stringify(obj));
            i++;
        });
    }
    return category_cards;
}


//GAME

let audio = [];
let category_cards = document.getElementsByClassName('category-card');
let wrong_answer = 0;
let mistakes = 0;
document.getElementsByClassName('startbtn')[0].addEventListener('click', function () {
    if (document.getElementById('startbtn').classList.contains('repeat')) {
        say();
    }
    else {
        wrong_answer = 0;
        document.getElementById('startbtn').classList.add('repeat');
        document.getElementById('startbtn').innerText = 'Repeat';
        Array.from(category_cards).forEach(card => {
            audio.push(card.getElementsByClassName('card-name')[0].textContent);
        });
        audio = shuffle(audio);
        startGame();
    }
});

function shuffle(unshuffled) {
    return unshuffled
        .map((a) => ({sort: Math.random(), value: a}))
        .sort((a, b) => a.sort - b.sort)
        .map((a) => a.value)
}
function updateStorage2(card){
    let word = card.getElementsByClassName('card-name')[0].textContent;
    for(let i = 1 ;i<65;i++){
        let key = 'word_' + i;
        let jsonString = localStorage.getItem(key);
        let obj = JSON.parse(jsonString);
     
    }
}

function startGame() {
    setTimeout(() => {
        say();
    }, 500);
    Array.from(category_cards).forEach(card => {
        card.addEventListener('click', function () {
            if (card.getElementsByClassName('card-name')[0].textContent === audio[0] && card.style.opacity !== '0.5') {
                new Audio('assets/correct.mp3').play();
                updateStorage2(card);
                mistakes = 0;
                card.style.opacity = '0.5';
                let correct = document.createElement('i');
                correct.classList.add('fa-check-circle');
                correct.classList.add('far');
                document.getElementById('answers').prepend(correct);
                audio.shift();
                if (audio.length === 0) {
                    setTimeout(() => {
                        document.getElementById('category').style.display = 'none';
                        document.getElementById('category-label').style.display = 'none';

                        if (wrong_answer > 0) {
                            document.getElementById('result-bad').textContent = wrong_answer + ' mistakes';
                            new Audio('assets/failure.mp3').play();
                            document.getElementById('failure-smile').style.display = 'block';
                            setTimeout(() => {
                                document.getElementById('failure-smile').style.display = 'none';
                            }, 3000);
                            wrong_answer = 0;
                        }
                        else {
                            new Audio('assets/success.mp3').play();
                            document.getElementById('success-smile').style.display = 'block';
                            setTimeout(() => {
                                document.getElementById('success-smile').style.display = 'none';
                            }, 3000);
                            wrong_answer = 0;
                        }
                        document.getElementById('answers').innerHTML = '';
                        document.getElementById('startbtn').innerText = 'Start';
                        document.getElementById('startbtn').classList.remove('repeat');
                        setTimeout(() => {
                            document.getElementById('main').style.display = 'block';
                            document.getElementsByClassName('mainpage-link')[0].style.textDecoration='underline';
                            let links = document.getElementsByClassName('category-link');
                            Array.from(links).forEach(link=>{
                                link.style.textDecoration='none';
                            });
                        }, 3000);
                    }, 1000);
                }
                else {
                    setTimeout(() => {
                        say();
                    }, 1000);
                }
            }
            else if (card.style.opacity !== '0.5') {
                new Audio('assets/error.mp3').play();
                let wrong = document.createElement('i');
                wrong.classList.add('fa-times-circle');
                wrong.classList.add('far');
                document.getElementById('answers').prepend(wrong);
                wrong_answer++;
                mistakes++;
            }
        })
    })
}

function say() {
    new Audio('assets/' + audio[0] + '.mp3').play();
}


//CLICKBTN

const st = {};

st.flap = document.querySelector('#flap');
st.toggle = document.querySelector('.toggle');

st.choice1 = document.querySelector('#choice1');
st.choice2 = document.querySelector('#choice2');

st.flap.addEventListener('transitionend', () => {

    if (st.choice1.checked) {
        st.toggle.style.transform = 'rotateY(-15deg)';
        setTimeout(() => st.toggle.style.transform = '', 400);
        playMode();

    } else {
        st.toggle.style.transform = 'rotateY(15deg)';
        setTimeout(() => st.toggle.style.transform = '', 400);
        trainMode();
    }

})

st.clickHandler = (e) => {

    if (e.target.tagName === 'LABEL') {
        setTimeout(() => {
            st.flap.children[0].textContent = e.target.textContent;
        }, 250);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    st.flap.children[0].textContent = st.choice2.nextElementSibling.textContent;
});

document.addEventListener('click', (e) => st.clickHandler(e));


 function playMode(){
    
    let lowerpart = document.getElementById('main').getElementsByClassName('card-lowerpart');
    Array.from(lowerpart).forEach(part=>{
        part.style.backgroundColor="lightsalmon";
        part.style.color="white";
    });
    let category_cards = document.getElementsByClassName('category-card');
    Array.from(category_cards).forEach(card=>{
        let lowerpart = card.getElementsByClassName('card-lowerpart')[0];
        let upperpart = card.getElementsByClassName('card-upperpart')[0];
        lowerpart.style.height='0';
        upperpart.style.height='100%';
    });
    let names = document.getElementsByClassName('card-name');
    let rotates = document.getElementsByClassName('fa-sync-alt');
    let volumes = document.getElementsByClassName('fa-volume-up');
    Array.from(names).forEach(name=>{
        name.style.display="none";
    });
    Array.from(rotates).forEach(rotate=>{
        rotate.style.display="none";
    });
    Array.from(volumes).forEach(volume=>{
        volume.style.display="none";
    });
    document.getElementById('startbtn').style.display="block";
}

 function trainMode() {
   
    
    let category_cards = document.getElementsByClassName('category-card');
    Array.from(category_cards).forEach(card=>{
        let lowerpart = card.getElementsByClassName('card-lowerpart')[0];
        let upperpart = card.getElementsByClassName('card-upperpart')[0];
        lowerpart.style.height='15%';
        upperpart.style.height='85%';
        card.style.opacity='1';
    });
    document.getElementById('answers').innerHTML = '';
    let names = document.getElementsByClassName('card-name');
    let rotates = document.getElementsByClassName('fa-sync-alt');
    let volumes = document.getElementsByClassName('fa-volume-up');
    Array.from(names).forEach(name=>{
        name.style.display="block";
    });
    Array.from(rotates).forEach(rotate=>{
        rotate.style.display="block";
    });
    Array.from(volumes).forEach(volume=>{
        volume.style.display="block";
    });
    document.getElementById('startbtn').style.display="none";
}

function createCards(arr){
    for(let i=0; i<arr.length; i++){
        const card_main = document.createElement('div');
        card_main.classList.add('nav_elem');
        const name_main = document.createElement('p');
        name_main.classList.add('main-txt');
        const photo_main = document.createElement('div');
        photo_main.classList.add('nav-photo');
        photo_main.style.backgroundImage = arr[i].image;
        name_main.innerText = arr[i].name;
        photo_main.addEventListener('click',function (){
            document.getElementById('category').style.display="block";
            document.getElementById('main').style.display="none";
            document.getElementById('menu-block').classList.remove('show');
            let links = document.getElementsByClassName('category-link');
            let name_category;
            
            Array.from(links).forEach(link=>{
                link.style.textDecoration='none';
                if(arr.name === link.textContent){
                    link.style.textDecoration='underline';
                    name_category = arr.name;
                }
            });
            document.getElementsByClassName('mainpage-link')[0].style.textDecoration='none';
            document.getElementById('category-label').style.display='block';
            categoryFunc(name_main.textContent);
            const st = {};
            st.choice1 = document.querySelector('#choice1');
            if(st.choice1.checked){
                playMode();
            }
            else{
                trainMode();
            }
        });
       
           
        document.getElementById('navigation').append(card_main);
        card_main.append(name_main);
        card_main.append(photo_main);
        
    }
}