export default () =>
{
    const font1 = document.createElement('link');
    font1.rel = 'stylesheet';
    font1.href = 'https://fonts.googleapis.com/css2?family=Amatic+SC:wght@400;700&family=Kreon:wght@300;500;700&display=swap';
    
    const godefer = document.getElementsByTagName('link')[0];
    if(!godefer || !godefer.parentNode) { return; }
    godefer.parentNode.insertBefore(font1, godefer);    
}
