document.addEventListener("DOMContentLoaded",
     function(){
          const menuHTML = "
          
          <nav>
               <div>
               <ul >
               <li><a href="#" >Modulo-1</a>
                    <ul class="submenu" >
                         <li> <a href="index.html" id="Home">Home&#X1F911;</a></li>
                         <li> <a href="ex001.html" id="ex001">EX001&#X1F923;</a></li>
                         <li> <a href="ex002.html" id="ex002">EX002&#X1F973;</a></li>
                         <li> <a href="ex003.html" id="ex003">EX003&#X1F423;</a></li>
                         <li> <a href="ex004.html" id="ex004">EX004&#X1F511;</a></li>
                         <li> <a href="ex005.html" id="ex005">EX005&#X1F968;</a></li>
                         <li> <a href="ex006.html" id="ex006">EX006&#X1F942;</a></li>
                         <li> <a href="ex007.html" id="ex007">EX007&#X1F948;</a></li>
                         <li> <a href="ex008.html" id="ex008">EX008&#X1F988;</a></li>
                    </ul>
                </li>
               </ul>
          </div>
          </nav> "; 

          document.getElementById('menu').innerHTML = menuHTML
          
     }
)