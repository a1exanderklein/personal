

function Header(item) {
    return (
        <section class="relative z-20 pointer-events-none">
            <div class="px-gx md:h-[33vh] h-[70vh] flex justify-center items-center">
                <h2 class="w-10/12 text-center text-[14.8vw] uppercase">
                    <a href={item.link} class="pointer-events-auto text-center flex items-center justify-center text-white">{item.title}</a>
                </h2>
            </div>
        </section>
    );
}

export default Header