import { Component } from '@angular/core';

@Component({
  selector: 'fruits-component',
  templateUrl: './fruits-component.component.html',
  styleUrls: ['./fruits-component.component.css']
})
export class FruitsComponentComponent {
  fruits = [
    { name: 'apple', emoji: '🍎' },
    { name: 'banana', emoji: '🍌' },
    { name: 'cherry', emoji: '🍒' },
    { name: 'grape', emoji: '🍇' },
    { name: 'lemon', emoji: '🍋' },
    { name: 'watermelon', emoji: '🍉' },
    { name: 'peach', emoji: '🍑' },
    { name: 'pineapple', emoji: '🍍' },
    { name: 'mango', emoji: '🥭' },
    { name: 'kiwi', emoji: '🥝' },
    { name: 'strawberry', emoji: '🍓' },
    { name: 'blueberry', emoji: '🫐' },
    { name: 'apricot', emoji: '🍑' },
    { name: 'pear', emoji: '🍐' },
    { name: 'plum', emoji: '🍑' },
    { name: 'orange', emoji: '🍊' },
    { name: 'pomegranate', emoji: '🍑' },
    { name: 'coconut', emoji: '🥥' },
    { name: 'papaya', emoji: '🍈' },
    { name: 'fig', emoji: '🍇' },
    { name: 'date', emoji: '🌴' },
    { name: 'lemon', emoji: '🍋' },
    { name: 'apricot', emoji: '🍑' },
    { name: 'cantaloupe', emoji: '🍈' },
    { name: 'dragon fruit', emoji: '🍉' },
    { name: 'lychee', emoji: '🍊' },
    { name: 'chili', emoji: '🌶️' },
    { name: 'passion fruit', emoji: '🥝' },
    { name: 'tamarind', emoji: '🍉' },
    { name: 'avocado', emoji: '🥑' },
    { name: 'nectarine', emoji: '🍑' }
  ];
}
