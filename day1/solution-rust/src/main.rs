use std::fs;
use std::io::{BufReader, BufRead};

fn main() {
    let list = fs::read_to_string("src/input.txt").expect("File read failed!");
    let mut top = list
        .split("\n\n")
        .map(|e| e.lines())
        .map(|e| e.fold(0, |sum, c| sum + c.trim().parse::<i32>().unwrap()))
        .collect::<Vec<i32>>();

    let max = list
        .split("\n\n")
        .map(|e| e.lines())
        .map(|e| e.fold(0, |sum, c| sum + c.trim().parse::<i32>().unwrap()))
        .fold(0, |sum, i| if i > sum { i } else { sum });

    println!("max {max}");

    top.sort_by(|a, b| b.cmp(a));

    let top3 = &top[0..3].iter().fold(0, |sum, i| i + sum);

    println!("top 3 {top3}");
}