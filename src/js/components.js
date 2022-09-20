import '../css/components.css';
// import webpacklogo from "../assets/img/webpack-logo.png";

export const greeting = (name) => {
    console.log('Create H1 element');

    const h1 = document.createElement('h1');
    h1.innerText = `Hi ${name}`;

    document.body.append( h1 );

    // image
    const img = document.createElement('img');
    img.src = webpacklogo;
    document.body.append(img);
}