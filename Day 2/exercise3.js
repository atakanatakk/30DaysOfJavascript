let ask= "Aşk bu dünyadaki en iyi şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor."
console.log(ask.match('aşk')) //['aşk', index: 41, input: 'Aşk bu dünyadaki en iyi şeydir. Bazıları aşkını buldu ve bazıları hala aşkını arıyor.', groups: undefined]

let sentence2 = 'Bir cümleyi çünkü ile bitiremezsiniz çünkü çünkü bir bağlaçtır'
let pattern2 = /çünkü/gi
console.log(sentence2.match(pattern2)) //(3) ['çünkü', 'çünkü', 'çünkü']


const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching';

// Metni temizleyin
const cleanSentence = sentence.replace(/[^a-zA-Z ]/g, '');

// Kelimeleri ayırın ve sayısını sıfırdan başlatın
const words = cleanSentence.split(' ');
const wordCounts = {};


// En sık kullanılan kelimeyi bulun
let mostFrequentWord = '';
let mostFrequentCount = 0;

console.log(`Cleaned sentence: "${cleanSentence}"`);
console.log(`Most frequent word: "${mostFrequentWord}" (${mostFrequentCount} times)`);


const sentence3 = 'Aylık maaşından 5000 euro, yıllık 10000 euro ikramiye, ayda 15000 euro online kurstan kazanıyor.';

let totalIncome = 0;

// Metin içinde sayıları arayın
const numbers = sentence3.match(/\d+/g);

// Bulunan sayıları toplayın
for (const number of numbers) {
  totalIncome += parseInt(number);
}

console.log(`Total annual income: ${totalIncome} euro`);
