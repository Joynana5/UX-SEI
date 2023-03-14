import React from "react";
import './HoriScroll.css';
import greenDragon from "../Img/Green Dragon Mock Up.jpg";
import wizardsBeard from "../Img/Wizards Beard Bergamot Mock Up.jpg";
import enchantedSpell from "../Img/Enchanted Spell Hibiscus Mock Up.jpg";
import kingsCure from "../Img/King_s Cure Mint Mock Up.jpg";
import fairMaiden from "../Img/Fair Maiden Lavender Mock Up.jpg";
import sunbrightGinger from "../Img/Sunbright Ginger Mock up.jpg";

import greenDrag from "../Img/GreenDragon.jpeg"
import wizBeard from "../Img/WizardsBeard.jpeg"
import dragNest from "../Img/DragonNest.jpeg"
import cauldron from "../Img/theCauldron.jpeg"
import fairMaid from "../Img/GreenDragon.jpeg"
import sunbright from "../Img/sunbright.jpeg"

import allProd from "../Img/All Products.webp"
import merch from "../Img/Merch.png"
import teaAccess from "../Img/Tea Accessories.jpeg"
import cafeEvents from "../Img/Cafe Event.png"
import teaFaqs from "../Img/Tea FAQs.webp"

function HoriScroll() {
  return (
    <div className="bigPage">
      <h2 className="scrollHeaders">Tea Boxes</h2>
      <div className="scrollContainer boxOfTea">
        <div className="teaBoxes">
          <img src={greenDragon} alt="greenDragon" className="boxedTea greenDragon" />
          <p className="boxLooseAccess">Green Dragon</p>
        </div>
        <div className="teaBoxes">
          <img src={wizardsBeard} alt="wizardsBeard" className="boxedTea wizardsBeard" />
          <p className="boxLooseAccess">Wizard's Beard</p>
        </div>
        <div className="teaBoxes">
          <img src={enchantedSpell} alt="enchantedSpell" className="boxedTea enchantedSpell" />
          <p className="boxLooseAccess">Enchanted Spell</p>
        </div>
        <div className="teaBoxes">
          <img src={kingsCure} alt="kingsCure" className="boxedTea kingsCure" />
          <p className="boxLooseAccess">King's Cure</p>
        </div>
        <div className="teaBoxes">
          <img src={fairMaiden} alt="fairMaiden" className="boxedTea fairMaiden" />
          <p className="boxLooseAccess">Fair Maden</p>
        </div>
        <div className="teaBoxes">
          <img src={sunbrightGinger} alt="sunbrightGinger" className="boxedTea sunbrightGinger" />
          <p className="boxLooseAccess">Sunbright</p>
        </div>
        <div className="seeMore">See More</div>
      </div>
      <div className="separateScroll"></div>
      <h2 className="scrollHeaders">Loose Tea</h2>
      <div className="scrollContainer teaOfLoose">
        <div className="teaLoose">
          <img src={greenDrag} alt="greenDrag" className="looseTea greenDrag" />
          <p className="boxLooseAccess">Green Dragon</p>
        </div>
        <div className="teaLoose">
          <img src={wizBeard} alt="wizBeard" className="looseTea wizBeard" />
          <p className="boxLooseAccess">Wizard's Beard</p>
        </div>
        <div className="teaLoose">
          <img src={dragNest} alt="dragNest" className="looseTea dragNest" />
          <p className="boxLooseAccess">Dragon's Nest</p>
        </div>
        <div className="teaLoose">
          <img src={cauldron} alt="cauldron" className="looseTea cauldron" />
          <p className="boxLooseAccess">The Cauldron</p>
        </div>
        <div className="teaLoose">
          <img src={fairMaid} alt="fairMaid" className="looseTea fairMaid" />
          <p className="boxLooseAccess">Fair Maiden</p>
        </div>
        <div className="teaLoose">
          <img src={sunbright} alt="sunbright" className="looseTea sunbright" />
          <p className="boxLooseAccess">Sunbright</p>
        </div>
        <div className="seeMore">See More</div>
      </div>
      <div className="separateScroll"></div>
      <h2 className="scrollHeaders">The Drunk Menu</h2>
      <div className="scrollContainer drunkOfMenu">
        <div className="veryDrunkMenu">
          <img src={allProd} alt="allProd" className="drunkMenu allProd" />
          <p className="boxLooseAccess">All Products</p>
        </div>
        <div className="veryDrunkMenu">
          <img src={merch} alt="merch" className="drunkMenu merch" />
          <p className="boxLooseAccess">Merchandise</p>
        </div>
        <div className="veryDrunkMenu">
          <img src={teaAccess} alt="teaAccess" className="drunkMenu teaAccess" />
          <p className="boxLooseAccess">Tea Accessories</p>
        </div>
        <div className="veryDrunkMenu">
          <img src={cafeEvents} alt="cafeEvents" className="drunkMenu cafeEvents" />
          <p className="boxLooseAccess">Cafe Events</p>
        </div>
        <div className="veryDrunkMenu">
          <img src={teaFaqs} alt="teaFaqs" className="drunkMenu teaFaqs" />
          <p className="boxLooseAccess">Tea FAQs</p>
        </div>
        <div className="seeMore">See More</div>
      </div>
    </div>
  );
}



export default HoriScroll