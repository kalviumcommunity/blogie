import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import '../App.css'
const About = () => {
  return (
    <div>
      <nav>
        <div className="div1">
          <img src={logo} alt="Logo" className="logo" />
          <div className="div23">
            <Link to="/" className="link">
              <h3>Home</h3>
            </Link>
            <Link to="/blog" className="link">
            <h3 >
              Create a Blog
            </h3></Link>
          </div>
        </div>
      </nav>
      <div className='about'>
        <strong>About blogie</strong><br /><br />
        <p>Welcome to blogie, a platform where creativity meets interest.</p><br />
        <p>At blogie, we believe in the power of ideas and the importance of sharing them with the world. Our mission is to provide a simple yet powerful platform for everyone to create and publish their own blogs, share their thoughts, stories, expertise, and passions with a global audience.</p><br/>
        <p>Whether you're an experienced writer, a hobbyist blogger, or someone who simply wants to share a unique perspective, Blogie is here for you. Our user-friendly interface makes it easy for anyone to get started, regardless of their level of expertise.</p><br />
        <p>With blogie, you can:</p><br/>
        <ul>
            <li><strong>Create</strong>: Effortlessly craft your own blog posts using our intuitive editor. Write about anything that inspires you – from personal experiences to professional insights, from travel adventures to cooking recipes.</li><br/>
            <li><strong>Connect</strong>: Engage with a vibrant community of fellow bloggers and readers. Explore a diverse range of topics, discover new ideas, and connect with like-minded individuals from around the world.</li><br />
            <li><strong>Inspire</strong>: Share your knowledge, passions, and creativity with others. Inspire and be inspired as you contribute to a collective pool of ideas and stories that enrich our community.</li><br />

        </ul>
        <p>At blogie, we're committed to fostering a supportive and inclusive environment where everyones voice is valued and respected. Whether you're here to learn, to teach, or simply to share, we invite you to join us on this exciting journey of self-expression and discovery.</p>
        <br />
        <p>Thank you for being a part of the blogie family❤️</p>
      </div>
    </div>
  )
}

export default About
