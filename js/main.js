const clickBtn = document.querySelector('#clickBtn');
clickBtn.addEventListener('click', () => {
    /* Organizar como as clases do animate.css estão sendo incluidas */
    document.getElementById('sectionOne').classList.toggle('animated');
    document.getElementById('sectionOne').classList.toggle('bounceIn');
    document.getElementById('sectionOne').innerHTML = '';
    document.getElementById('sectionOne').insertAdjacentHTML('beforeend',
    `<h2>O que é GOT?</h2>
        <p>
        Game of Thrones (Game of Thrones no Brasil e A Guerra dos Tronos em Portugal) 
        é uma série de televisão norte-americana criada por David Benioff e D. B. Weiss, 
        e baseada na série de livros A Song of Ice and Fire, de George R. R. Martin.[1] 
        Game of Thrones é filmada no Canadá, na Croácia, na Islândia, em Malta, em Marrocos, 
        na Espanha, na Irlanda do Norte, na Escócia e nos Estados Unidos. 
        A primeira temporada da série estreou em 17 de abril de 2011. 
        Até agora, sete temporadas já foram exibidas e a oitava e última temporada ainda
        não tem data de estreia.[2] Segundo a HBO, a oitava temporada será a última.[3]       
        </p>
    
    `
);
    /*document.querySelector('#sectionOne').className =
     'section section-light animated bounceIn';*/
});