export const enableTablesOfContents = () =>
{
    const tocs = Array.from(document.getElementsByClassName("toc"));
    for(const toc of tocs)
    {
        const btns = toc.getElementsByClassName("toc-button");
        const container = Array.from(toc.getElementsByClassName("toc-container"))[0];
        if(!container) { continue; }

        container.style.display = "none";
        
        const callback = (ev) => 
        {
            if(container.style.display == 'block') {
                ev.currentTarget.innerHTML = 'Show Table of Contents';
                container.style.display = 'none';
            } else {
                ev.currentTarget.innerHTML = 'Hide Table of Contents';
                container.style.display = 'block';
            }
        }

        for(const btn of btns)
        {
            btn.addEventListener('click', callback);
        }
    }
}