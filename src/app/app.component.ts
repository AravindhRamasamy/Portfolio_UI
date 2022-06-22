import { Component, AfterViewInit } from '@angular/core';
declare var anime: any; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Portfolio_UI';
  ngAfterViewInit(): void {
 
    // Wrap every letter in a span
   let textWrapper = document.querySelector('.c2 .letters');
   if(textWrapper!=null && textWrapper.textContent!=null){
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter' style='display:inline-block;'>$&</span>");  
   }
   // do not forget this display:inline-block style here
   
   anime.timeline({loop: true})
     .add({
       targets: '.c2 .letter',
       translateY: ["1.1em", 0],
       translateX: ["0.55em", 0],
       translateZ: 0,
       rotateZ: [180, 0],
       duration: 750,
       easing: "easeOutExpo",
       delay: (_el: any, i: number) => 50 * i
     }).add({
       targets: '.c2',
       opacity: 0,
       duration: 1000,
       easing: "easeOutExpo",
       delay: 1000
     });
   
     }
}
