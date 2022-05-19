


function Contact() {


    return (
        <>
            <header>
      <img src="img/horizontalBlanc.png" alt="PROUT" />
      <nav>
        <a href="/Kirk/produit">Boutique</a>
        <a href="/Kirk/vitrine">Vitrine</a>
        <a href="/kirk/contact">Contact</a>
      </nav>
    </header>
            <div className="formulaire">
            <h1>Formulaire de contact</h1>
                <form action="">
                    <label>Nom & prénom</label>
                    <input type="text" id="fname" name="firstname" placeholder="Votre nom et prénom"></input>

                    <label >Sujet</label>
                    <input type="text" id="sujet" name="sujet" placeholder="L'objet de votre message"></input>

                    <label >Email</label>
                    <input id="emailAddress" type="email" name="email" placeholder="Votre email"></input>


                    <label >Message</label>
                    <textarea placeholder="Votre message" ></textarea>

                    <input type="submit" value="Envoyer"></input>
                </form>
            </div>

        </>
    );


}

export default Contact;
