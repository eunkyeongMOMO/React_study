const About = () =>{
    return <>
    <div className='subVisual'></div>
      <div className='infoTop'>
        <div>HOME > ABOUT > HISTORY</div>
        <span>THE BIRTH OF FREITAG</span>
        <p>With a sewing machine in the kitchen and a laundry in the bathtub: Oliver Gemperle, a former roommate of Daniel and Markus Freitag, tells us how the FREITAG story began back in the early 90s.</p>
      </div>
      <ul className='history'>
      <li>
        <span>LET'S GO BACK TO 1993</span>
        <p>My room in the apartment cost me all of 300 bucks. No wonder. The flat was a dump, the plaster was peeling off the walls in pieces as big as plates, and wheezing away in the bathroom was a gas-powered flow water heater. Directly in front of the house, trucks thundered noisily across the bridge that cut the city in two.</p>
        <img src={process.env.PUBLIC_URL + './img/historyimg1.webp'} ></img>
        <p>One of my two roommates was a guy called Markus Freitag. I only found out more about his plans one gray afternoon when he returned from one of the city's less salubrious industrial areas. In the trailer attached to his bike was an old tarp he'd managed to procure from a trucking company. He heaved the bulky, stinking monster of a tarp up the staircase and, with one final effort, dumped it into our living room. "I'm gonna make a bag out of it," he said. A bag. For cyclists, he explained, but one that would work for other people too. All made of recycled stuff like tarps and inner tubes and car safety belts. Right.</p>
      </li>
      <li>
        <span>BETWEEN MATTRESS AND STEREO SYSTEM</span>
        <p>In his room, between the mattress and his stereo system, Markus spread out the washed truck tarp and drew a pattern on it. Our apartment was transformed into a bag factory. When I got up in the morning – well, let's say noonish – and wanted to take a shower, the bath was awash with bits of truck tarp floating in this blackish brew. The corridor was packed with boxes full of bicycle inner tubes. Rattling away in the kitchen from morning till night was an industrial sewing machine that effortlessly drowned out the street noise. </p>
        <img src={process.env.PUBLIC_URL + './img/historyimg2.avif'} ></img>
        <p>In the meantime, Daniel had got back from a trip to the US and installed a computer and printer in the last free bit of space in the apartment. He was developing a database for orders, deliveries, inventories, etc. I had no idea whether he’d moved in or whether he just worked all the way through the night. Did the two brothers ever sleep? Who knows? These were exceptional circumstances, and I knew it couldn’t go on like that for ever. </p>
      </li>
      
    </ul>
    </>
  }

  export default About;