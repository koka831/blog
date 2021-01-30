---
title: Code Festival 2018 qual B
date: 2017-11-29
categories:
- Competitive Programming
tags:
  - AtCoder
  - Grid
description: 考察
---

[CODE FESTIVAL 2018 qual B](https://code-festival-2018-qualb.contest.atcoder.jp/) 予選参加記録。


## [A](https://code-festival-2018-qualb.contest.atcoder.jp/tasks/code_festival_2018_qualb_a)

1から100の目が出るサイコロを振った時、出た目が入力`N`の倍数でない確率を求める。

1から100のうち、`N`の倍数であるものは`N`で割り切れるものの個数であるから、`100 / N`個.

なので`N`の倍数でないものは`100 - 100 / N`個.

### 解答

```rust
fn main() {
    let n = read_one::<usize>();
    println!("{}", 100 - 100 / n);
}
```

## [B](https://code-festival-2018-qualb.contest.atcoder.jp/tasks/code_festival_2018_qualb_b)

数列`a_n, b_n`が与えられた時, 任意の`a_i in a_n`の値を1だけ増加させることができる。
これを`X`回以内行った場合に`\sum a_i * b_i = a_1 * b_1 + a_2 * b_2 + ... + a_N * b_N`の最大値を求める。

制約
```
1 <= a_i, b_i <= 100
0 <= X <= 100
```

任意の`a_j`の値を一度だけ1増加させたとすると、元の配列の和からの差分は
```
(a_1 * b_1 + ... + a_j * b_j + ... a_N * b_N) - (a_1 * b_1 + ... + (a_j + 1) * b_j + ... + a_N + b_N)
= a_j
```
なので、増分は`a_j`に比例する.  
これを`X`回繰り返しても増分は`a_j`に比例するし、`a_j`の大きさは変動しない.  
また、`b_i`が1以上なので、`a_i`は大きいものから1つだけ選び、その`a_i`に対して処理を行えばよい。  
(仮に`b_i = 0`となる場合があるなら, そのような`b_i`に対しては`(a_i + k) * b_i => 0`なので)  

したがって求める値は, `\sum a_n * b_n + max(a_n) * X`.


### 解答

```rust
fn main() {
    let (n, x) = {
        let i = read::<usize>();
        (i[0], i[1])
    };

    let mut ab = Vec::new();

    for _ in 0..n {
        let i = read::<usize>();
        ab.push((i[0], i[1]));
    }

    ab.sort_by_key(|x| x.1);
    ab.reverse();

    let mut sum = 0;
    for x in ab.iter() {
        sum += x.0 * x.1;
    }

    println!("{}", sum + ab[0].1 * x);
}
```

## [C](https://code-festival-2018-qualb.contest.atcoder.jp/tasks/code_festival_2018_qualb_c)

`N * N (N <= 1000)`マスのグリッドが与えられる.  
あるマスを塗るとその4近傍も塗られるとした時, グリッドを全て塗る方法を出力する.

このときに塗っていいマスの上限が`201,800`マスである.

以下のようにチェスのナイトが動けるマス目っぽく塗ると, 無駄なく4近傍をカバーできる.

```
x . . . . x . . . . x . .
. . . x . . . . x . . . .
. x . . . . x . . . . x .
. . . . x . . . . x . . .
. . x . . . . x . . . . x
x . . . . x . . . . x . .
. . . x . . . . x . . . .
```

このときに`N * N`の四隅が切り取られるので、はみ出た部分を押し込む形で塗ると上手くいく.

このアプローチでいくと, `N = 1000`のときに塗るマスが`200,800`マスとなる.


### 解答

```rust
fn main() {
    let n = read_one::<usize>();

    let mut vec = vec![vec!['.'; n]; n];
    let ar = [0, 3, 1, 4, 2];
    let ra = [2, 4, 1, 3, 0];

    for i in 0..n { for j in 0..n {
        let mut flg = false;
        if j % 5 == ar[i % 5] { flg = true; }

        if i == 0 {
            if j % 5 == ra[(j + 3) % 5] { flg = true; }
        }

        if j == 0 {
            if i % 5 == ar[(i + 3) % 5] { flg = true; }
        }

        if i == n - 1 {
            if j % 5 == ar[(i + 1) % 5] { flg = true; }
        }

        if j == n - 1 {
            if i % 5 == ra[j % 5] { flg = true; }
        }

        if flg { vec[i][j] = 'X'; }
    }}

    // let mut cnt = 0;
    for i in 0..n { for j in 0..n {
            // if vec[i][j] == 'X' { cnt += 1; }
            print!("{}", vec[i][j]);
        }
        println!();
    }

    // n == 1000 -> 200,800
    // println!("{}", cnt);
}
```


## 所感
最初Cでn = 2の場合をアドホックに書いてて、👆の形の解答に直した後にアドホックの部分を消すのを忘れて1テストケースだけ通らない...と無駄に悩んでしまった. 解法はすぐわかったので本当にもったいない.  
D, Eに関しては順位表を見てE < DっぽかったのでEを見て撤退. いつか解けるようになりたい.
