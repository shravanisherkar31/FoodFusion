function Header({ title, subtitle }) {
    return(
        <div>
            <h1 style={{ fontFamily: 'Arial, sans-serif',fontsize: '24px', fontWeight: 'bold', color: '#333', textAlign: 'center' }}>{title}</h1>
            <h2 style={{ fontFamily: 'Arial, sans-serif', fontSize: '22px', color: '#f08888', textAlign: 'center' }}>{subtitle}</h2>
        </div>
    )
}
export default Header;