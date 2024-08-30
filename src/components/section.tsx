interface SectionProps {
    className?: string;
    children: React.ReactNode;
}

const Section = ({className, children}: SectionProps) => {
    return(
        <section className={`${className} py-16 px-14 bg-accent-pink`}>
            <div className='rounded-[75px] px-24 bg-white'>
                {children}
            </div>
        </section>
    );
}

export default Section;
