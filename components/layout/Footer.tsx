// Note: Footer component for the layout of the website

const Footer: React.FC = () => {
    return (
        <footer className="p-4 bg-gray-200 text-center">
            <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </footer>
    );
};

export default Footer;