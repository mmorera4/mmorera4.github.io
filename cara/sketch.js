let mic

function setup() {
  createCanvas(400, 600);
  
  mic = new p5.AudioIn();
  mic.start();
  
/* el setup és la configuració i s'indica el tamany en pícsels del canvas o dibuix. que s'escriu amb lletra de camell o camelCanvas. La funció camelCase tindrà dos arguments o paràmetres que es posen entre parèntesis, el primer número és l'amplada de l'àrea de dibuix és a dir 400 pícsels, el segon número és l'alçada en pícsels, és a dir 600 pícsels. La funció setup només s'executa una vegada*/
}

function draw() {
  
  let vol = mic.getLevel();
  let h = map (vol, 0, 1, height, 0)
  
  /* La funció draw s'executa 50 o + vegades per segon depenent dels fps que sigui capaç de procesar el ordinador. 
  Background significa fons, i pot tenir o 1 número (de 0 a 255 escala de grisos), 2 números (el primer número serà el gris i el segon la transparéncia), 3 números (el primer número és l'escala de vermell, el segon l'escala de verds i el tercer l'escala de blaus), s'anomena RGB per red, green and blue. Tots tres números van de 0 a 255 per tant 255x255x255 que és igual a 16 mil·lions de colors diferents. Per triar un color escric a google color picker rgb, per exemple rosa és (168, 50, 151). Si hi ha 4 números el quart és la transparéncia */
  

  background(66, 292, 60);
  fill(229, 194, 152);
  ellipse(200, 300, 220, 300);
  fill(0,0, 130);
  ellipse(150, 240, 40, 20);
  ellipse(250, 240, 40, 20);
  fill(255, 0, 0);
  arc(200, 370, 100, 200-h, 0, PI);
}
