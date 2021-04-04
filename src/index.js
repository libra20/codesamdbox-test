// /**
//  * varで宣言
//  */
// var val1 = "var変数を宣言";
// console.log(val1);

// // var変数は上書き可能
// val1 = "var変数を上書き";
// console.log(val1);

// // varを再宣言(Lintのみで警告)
// var val1 = "var変数を再宣言";
// console.log(val1);

// let val2 = "let変数宣言";

// // letは上書き可能
// val2 = "let変数を上書き";

// // letは再宣言不可能(LintだけでなくJSでエラー)
// let val2 = "let変数再宣言";

// const val3 = "const定数";

// // val3 = "const定数は上書き不可";

// // const val3 = "constは再宣言も不可";

// const obj4 = {
//   name: "hoge",
//   age: 14
// };
// obj4.name = "fuga";
// obj4.address = "tokyo"; // オブジェクトへの要素追加は新しいキーを足すだけ
// console.log(obj4);

// const array5 = ["dog", "cat"];
// array5[0] = "bird";
// array5.push("monkey"); // 配列への要素追加はpush
// console.log(array5);

// テンプレート文字列
// const name = "hoge";
// const age = 14;

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// アロー関数
// // 従来の関数宣言
// function func1(name) {
//   return `hello, ${name}!`;
// }
// console.log(func1("hoge1"));

// //　関数は変数に入れることも可能
// const func2 = function (name) {
//   return `hello, ${name}!`;
// };
// console.log(func2("hoge2"));

// // アロー関数(変数に入れる形の関数宣言が楽)
// const func3 = (name) => {
//   return `hello, ${name}!`;
// };
// console.log(func3("hoge3"));

// // アロー関数(一行リターンならもっと省略可能)
// const func4 = (name) => `hello, ${name}!`;
// console.log(func4("hoge4"));

/**
 * 分割代入
 */
// /**
//  * オブジェクトの場合
//  */
// const obj1 = {
//   name: "hoge",
//   age: 14
// };

// // 従来の記法
// const message1 = `名前: ${obj1.name}, 年齢: ${obj1.age}`;
// console.log(message1);

// // 分割代入(知らないと意味がわからない)
// const { name, age } = obj1;
// const message2 = `名前: ${name}, 年齢: ${age}`;
// console.log(message2);

// /**
//  * 配列の場合
//  */
// const array1 = ["hoge", 14];

// // 従来の記法
// const message3 = `名前: ${array1[0]}, 年齢: ${array1[1]}`;
// console.log(message3);

// // 分割代入(知らないと意味がわからない)
// const [name2, age2] = array1;
// const message4 = `名前: ${name2}, 年齢: ${age2}`;
// console.log(message4);

// /**
//  * デフォルト値
//  */
// // 関数の引数
// const func1 = (name = "ゲスト") => `hello, ${name}!`;
// console.log(func1());

// // 分割代入
// const obj1 = { name: "hoge", age: 14 };
// const { age = 20, name = "ゲスト", address = "日本" } = obj1;
// console.log(`age: ${age}, name: ${name}, address: ${address}`);

// /**
//  * スプレッド構文
//  */
// const array1 = [10, 20, 30, 40];

// // 配列を展開する(配列初期化や関数の引数で複数指定する形にする)
// const sum4 = (n1, n2, n3, n4) => n1 + n2 + n3 + n4;
// console.log(sum4(...array1));

// // 配列のコピーを行う(新しい配列を宣言し、初期化の中身をコピーとする)
// const array2 = [...array1];
// console.log(array2);

// // 残余引数は逆に展開された形を配列としてまとめる
// const [n1, ...array3] = array1;
// console.log(array3);

/**
 * map, filter
 */

// // mapは配列の要素を順次処理して、新しい配列に入れる
// const array1 = ["山田", "川田"];

// // mapは配列要素の変換処理
// const array2 = array1.map((name) => `${name}さん`);
// console.log(array2);
// const array3 = array1.map((name) => {
//   if (name === "山田") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(array3);

// // mapはforeachとしても使う
// array1.map((name) => console.log(name));

// // mapで要素のインデックスも得ることができる
// array1.map((name, index) => console.log(`${index}番目は${name}`));

// // filterは条件式を指定して配列の要素を絞り込める
// const array4 = array1.filter((name) => {
//   return name.startsWith("山");
// });
// console.log(array4);

/**
 * 三項演算子
 */
// const someNum = 1000;

// const formattedNum = someNum.toLocaleString();
// console.log(formattedNum);

// var func1 = (num) => {
//   return typeof num === "number" ? num.toLocaleString() : "数値入れて";
// };
// console.log(func1(1000));

/**
 * 論理演算子&&と||の本当の意味
 */
const num = 0;
// &&は左がtrueなら右を返す(左がfalseならそのまま返す)
const message1 = num && "値が設定されました";
console.log(message1);
// ||は左がfalseなら右を返す(左がtrueならそのまま返す)
const message2 = num || "値が設定されていません";
console.log(message2);
