

<script lang="ts" context="module">
   


 
   
     function fetchSomeQuote() {
        console.log('fetching quote')
                fetch('https://api.quotable.io/random')
        .then(response => response.json())
        
        .then((data ) => {
          
          
                document.getElementById('author').innerText = data.author;
                document.getElementById('quote').innerText = data.content;
    
          
        }
          ) 
        }
    fetchSomeQuote();
    
    
       
    
    
    </script>
    
    <div class="today-quote pd-y">
        <div class="section-header">
            <h2 class="section-tiltle" id="qutoes">Quotes</h2>
            <span class="line"></span>
         </div>
    <div class="container">
        <div class="quotes-content"> 
            <button class="btnclick opacity-hover" id="btn" on:click={fetchSomeQuote}>Start your day in motivation quote</button>
                <p id="author"  ></p>
            <p id="quote" ></p>
        </div>
    </div>
      </div>
    
    
      <style>
        .section-header{
        text-align: center;
    }
    .section-header .section-tiltle{
       font-size: 35px;
       margin-bottom: 8px;
       text-transform: capitalize;
    
    }
    .section-header .line{
        display: block;
        margin: 0px auto 70px auto;
        height: 5px;
        width: 60px;
        background-color: #6195ff;
    
    }
        .container{
        width: 80%;
       
       
        margin: auto;
    }
    .pd-y{
        padding: 120px 0;
    }
    .today-quote{
    
       
    top: 100px;

    left: 500px;
    
    text-align: center;
    font-size: 22px;
    
    }
    .today-quote .btnclick{
    min-width: 160px;
    padding: 20px ;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    font-size: 18px;
    margin-right: 10px;
    color: #f9f9f9;
    background-color: #6195ff;
    }
    #author{
    font-size: 38px;
    text-align: center;
    color: #6195ff;
    margin-top: 20px;
    }
    #quote{
    font-size: 32px;
    text-align: center;
    margin-top: 20px;
    
    }
    .opacity-hover{
       transition: opacity .5s;
        
    }
    .opacity-hover:hover{
        opacity: 0.8;
    }
      </style>