interface SectionProps {
    className?: string;
    background?: boolean;
    children: React.ReactNode;
}

const Section = ({className, background = true, children}: SectionProps) => {
    return(
        <section className={`${className} ${background ? 'lg:py-16 py-10 px-7 lg:px-14' : ''} bg-accent-pink`}>
            {background ? (
                <div className='rounded-[60px] lg:rounded-[75px] px-7 lg:px-24 bg-white'>
                    {children}
                </div>
            ) : (
                <>{children}</>
            )}
        </section>
    );
}

export default Section;
