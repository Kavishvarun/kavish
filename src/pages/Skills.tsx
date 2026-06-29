import { motion, type Variants } from 'framer-motion';

export default function Skills() {
  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <section id="skills">
      <motion.div 
        initial={{ opacity: 0, y: -20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: true }}
      >
        <div className="eyebrow">Expertise</div>
        <h2 className="section-title">Skills &amp; Technologies</h2>
        <p className="section-desc">A multidisciplinary toolkit spanning AI, data, development, and design — built to take any project from idea to production.</p>
      </motion.div>

      <motion.div 
        className="skills-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        <motion.div variants={item} className="skill-card" style={{ '--sk-grad': 'linear-gradient(90deg,#A855F7,#EC4899)' } as React.CSSProperties}>
          <div className="skill-icon">🧠</div><div className="skill-name">Machine Learning</div><div className="skill-tools">Scikit-learn · TensorFlow · PyTorch</div>
        </motion.div>
        
        <motion.div variants={item} className="skill-card" style={{ '--sk-grad': 'linear-gradient(90deg,#06B6D4,#3B82F6)' } as React.CSSProperties}>
          <div className="skill-icon">👁️</div><div className="skill-name">Computer Vision</div><div className="skill-tools">YOLO · OpenCV · CNN architectures</div>
        </motion.div>
        
        <motion.div variants={item} className="skill-card" style={{ '--sk-grad': 'linear-gradient(90deg,#F97316,#EF4444)' } as React.CSSProperties}>
          <div className="skill-icon">💬</div><div className="skill-name">NLP / LLMs</div><div className="skill-tools">Transformers · NLTK · LangChain</div>
        </motion.div>
        
        <motion.div variants={item} className="skill-card" style={{ '--sk-grad': 'linear-gradient(90deg,#10B981,#06B6D4)' } as React.CSSProperties}>
          <div className="skill-icon">📊</div><div className="skill-name">Data Science</div><div className="skill-tools">Pandas · NumPy · Matplotlib · Seaborn</div>
        </motion.div>
        
        <motion.div variants={item} className="skill-card" style={{ '--sk-grad': 'linear-gradient(90deg,#6366F1,#8B5CF6)' } as React.CSSProperties}>
          <div className="skill-icon">⚛️</div><div className="skill-name">Web Development</div><div className="skill-tools">React · Next.js · TypeScript · Tailwind</div>
        </motion.div>
        
        <motion.div variants={item} className="skill-card" style={{ '--sk-grad': 'linear-gradient(90deg,#EC4899,#F97316)' } as React.CSSProperties}>
          <div className="skill-icon">🎨</div><div className="skill-name">UI/UX Design</div><div className="skill-tools">Figma · Framer · Design Systems</div>
        </motion.div>
        
        <motion.div variants={item} className="skill-card" style={{ '--sk-grad': 'linear-gradient(90deg,#FBBF24,#F97316)' } as React.CSSProperties}>
          <div className="skill-icon">🐍</div><div className="skill-name">Python</div><div className="skill-tools">Core · Automation · REST APIs · Flask</div>
        </motion.div>
        
        <motion.div variants={item} className="skill-card" style={{ '--sk-grad': 'linear-gradient(90deg,#8B5CF6,#06B6D4)' } as React.CSSProperties}>
          <div className="skill-icon">☁️</div><div className="skill-name">Deep Learning</div><div className="skill-tools">CNNs · RNNs · GANs · Attention · BERT</div>
        </motion.div>
      </motion.div>
    </section>
  );
}
