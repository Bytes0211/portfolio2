import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

describe('Portfolio HTML Content Tests', () => {
  let document;
  
  beforeEach(() => {
    const html = readFileSync(join(process.cwd(), 'index.html'), 'utf-8');
    document = new DOMParser().parseFromString(html, 'text/html');
  });

  describe('Company Brochure Generator Card', () => {
    let projectCard;
    
    beforeEach(() => {
      const aiSection = document.getElementById('ai');
      const projectCards = aiSection.querySelectorAll('.project-card');
      // Third card in AI section is the Company Brochure Generator (0-indexed)
      projectCard = projectCards[2];
    });

    it('renders correctly with proper title', () => {
      const title = projectCard.querySelector('.project-card__title');
      expect(title).toBeTruthy();
      expect(title.textContent.trim()).toBe('Company Brochure Generator');
    });

    it('displays correct icon image', () => {
      const icon = projectCard.querySelector('.project-card__icon img');
      expect(icon).toBeTruthy();
      expect(icon.getAttribute('src')).toBe('assets/brochure_icon.png');
    });

    it('contains comprehensive description', () => {
      const description = projectCard.querySelector('.project-card__description');
      expect(description).toBeTruthy();
      expect(description.textContent).toContain('AI-powered tool');
      expect(description.textContent).toContain('professional company brochures');
      expect(description.textContent).toContain('analyzing website content');
      expect(description.textContent).toContain('two-stage LLM pipeline');
      expect(description.textContent).toContain('intelligent link selection');
    });

    it('has correct GitHub link', () => {
      const link = projectCard.querySelector('.project-card__link');
      expect(link).toBeTruthy();
      expect(link.getAttribute('href')).toBe('https://github.com/Bytes0211/ai_engineering/tree/main/brochure');
      expect(link.textContent).toContain('View Details');
    });
  });

  describe('Tech Stack Badges - Company Brochure Generator', () => {
    let projectCard;
    
    beforeEach(() => {
      const aiSection = document.getElementById('ai');
      const projectCards = aiSection.querySelectorAll('.project-card');
      projectCard = projectCards[2];
    });

    it('displays all 5 specified technologies', () => {
      const techBadges = projectCard.querySelectorAll('.project-card__tech-badge');
      expect(techBadges.length).toBe(5);
    });

    it('includes OpenAI API badge', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const openAIBadge = badges.find(badge => badge.textContent.trim() === 'OpenAI API');
      expect(openAIBadge).toBeTruthy();
    });

    it('includes BeautifulSoup badge', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const bsBadge = badges.find(badge => badge.textContent.trim() === 'BeautifulSoup');
      expect(bsBadge).toBeTruthy();
    });

    it('includes Python badge', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const pythonBadge = badges.find(badge => badge.textContent.trim() === 'Python');
      expect(pythonBadge).toBeTruthy();
    });

    it('includes uv badge', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const uvBadge = badges.find(badge => badge.textContent.trim() === 'uv');
      expect(uvBadge).toBeTruthy();
    });

    it('includes unittest badge', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const unittestBadge = badges.find(badge => badge.textContent.trim() === 'unittest');
      expect(unittestBadge).toBeTruthy();
    });

    it('displays tech badges in correct order', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const badgeTexts = badges.map(badge => badge.textContent.trim());
      
      expect(badgeTexts).toEqual([
        'OpenAI API',
        'BeautifulSoup',
        'Python',
        'uv',
        'unittest'
      ]);
    });
  });

  describe('Project Features List - Company Brochure Generator', () => {
    let projectCard;
    
    beforeEach(() => {
      const aiSection = document.getElementById('ai');
      const projectCards = aiSection.querySelectorAll('.project-card');
      projectCard = projectCards[2];
    });

    it('displays all 4 features', () => {
      const features = projectCard.querySelectorAll('.project-card__features li');
      expect(features.length).toBe(4);
    });

    it('lists smart link selection feature', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const linkFeature = features.find(li => 
        li.textContent.includes('Smart link selection') &&
        li.textContent.includes('GPT-5-nano') &&
        li.textContent.includes('relevant company pages')
      );
      expect(linkFeature).toBeTruthy();
    });

    it('lists two-stage LLM workflow feature', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const workflowFeature = features.find(li => 
        li.textContent.includes('Two-stage LLM workflow') &&
        li.textContent.includes('link discovery') &&
        li.textContent.includes('content aggregation') &&
        li.textContent.includes('brochure generation')
      );
      expect(workflowFeature).toBeTruthy();
    });

    it('lists JSON structured outputs feature', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const jsonFeature = features.find(li => 
        li.textContent.includes('JSON structured outputs') &&
        li.textContent.includes('reliable parsing') &&
        li.textContent.includes('streaming support')
      );
      expect(jsonFeature).toBeTruthy();
    });

    it('lists CLI and testing features', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const cliFeature = features.find(li => 
        li.textContent.includes('CLI interface') &&
        li.textContent.includes('custom models') &&
        li.textContent.includes('20+ unit tests')
      );
      expect(cliFeature).toBeTruthy();
    });

    it('features are listed in correct order', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const featureTexts = features.map(li => li.textContent.trim());
      
      expect(featureTexts).toEqual([
        'Smart link selection with GPT-5-nano for relevant company pages',
        'Two-stage LLM workflow: link discovery → content aggregation → brochure generation',
        'JSON structured outputs for reliable parsing & streaming support',
        'CLI interface, custom models, comprehensive testing (20+ unit tests)'
      ]);
    });
  });

  describe('About Section - AI Engineering Updates', () => {
    let aboutSection;
    
    beforeEach(() => {
      aboutSection = document.getElementById('about');
    });

    it('contains updated about text mentioning AI engineering', () => {
      const aboutText = aboutSection.querySelector('.about__text');
      expect(aboutText).toBeTruthy();
      expect(aboutText.textContent).toContain('AI engineering');
    });

    it('mentions production-ready LLM applications', () => {
      const aboutText = aboutSection.querySelector('.about__text');
      expect(aboutText.textContent).toContain('production-ready LLM applications');
    });

    it('mentions multi-provider integration', () => {
      const aboutText = aboutSection.querySelector('.about__text');
      expect(aboutText.textContent).toContain('multi-provider integration');
      expect(aboutText.textContent).toContain('OpenAI');
      expect(aboutText.textContent).toContain('Anthropic');
      expect(aboutText.textContent).toContain('Google Gemini');
    });

    it('mentions intelligent chatbots', () => {
      const aboutText = aboutSection.querySelector('.about__text');
      expect(aboutText.textContent).toContain('intelligent chatbots');
      expect(aboutText.textContent).toContain('natural language data exploration');
    });

    it('maintains existing data engineering focus', () => {
      const aboutText = aboutSection.querySelector('.about__text');
      expect(aboutText.textContent).toContain('Data Engineer');
      expect(aboutText.textContent).toContain('scalable, reliable, and governed data platforms');
    });
  });

  describe('Tech Stack - AI & Analytics Skills', () => {
    let aiAnalyticsGroup;
    
    beforeEach(() => {
      const aboutSection = document.getElementById('about');
      const skillGroups = aboutSection.querySelectorAll('.about__skill-group');
      // Find the AI & Analytics group (5th group)
      aiAnalyticsGroup = Array.from(skillGroups).find(group => 
        group.querySelector('h4')?.textContent.trim() === 'AI & Analytics'
      );
    });

    it('AI & Analytics skill group exists', () => {
      expect(aiAnalyticsGroup).toBeTruthy();
    });

    it('includes OpenAI API with model details', () => {
      const skills = Array.from(aiAnalyticsGroup.querySelectorAll('li'));
      const openAISkill = skills.find(li => 
        li.textContent.includes('OpenAI API') &&
        li.textContent.includes('GPT-4') &&
        li.textContent.includes('GPT-3.5')
      );
      expect(openAISkill).toBeTruthy();
    });

    it('includes Anthropic Claude', () => {
      const skills = Array.from(aiAnalyticsGroup.querySelectorAll('li'));
      const claudeSkill = skills.find(li => li.textContent.trim() === 'Anthropic Claude');
      expect(claudeSkill).toBeTruthy();
    });

    it('includes Google Gemini', () => {
      const skills = Array.from(aiAnalyticsGroup.querySelectorAll('li'));
      const geminiSkill = skills.find(li => li.textContent.trim() === 'Google Gemini');
      expect(geminiSkill).toBeTruthy();
    });

    it('includes Ollama with local LLMs note', () => {
      const skills = Array.from(aiAnalyticsGroup.querySelectorAll('li'));
      const ollamaSkill = skills.find(li => 
        li.textContent.includes('Ollama') &&
        li.textContent.includes('local LLMs')
      );
      expect(ollamaSkill).toBeTruthy();
    });

    it('includes Prompt Engineering', () => {
      const skills = Array.from(aiAnalyticsGroup.querySelectorAll('li'));
      const promptSkill = skills.find(li => li.textContent.trim() === 'Prompt Engineering');
      expect(promptSkill).toBeTruthy();
    });

    it('includes AI Agent Development', () => {
      const skills = Array.from(aiAnalyticsGroup.querySelectorAll('li'));
      const agentSkill = skills.find(li => li.textContent.trim() === 'AI Agent Development');
      expect(agentSkill).toBeTruthy();
    });

    it('includes Pandas for analytics', () => {
      const skills = Array.from(aiAnalyticsGroup.querySelectorAll('li'));
      const pandasSkill = skills.find(li => li.textContent.trim() === 'Pandas');
      expect(pandasSkill).toBeTruthy();
    });

    it('displays all 7 AI & Analytics skills', () => {
      const skills = aiAnalyticsGroup.querySelectorAll('li');
      expect(skills.length).toBe(7);
    });

    it('skills are in correct order', () => {
      const skills = Array.from(aiAnalyticsGroup.querySelectorAll('li'));
      const skillTexts = skills.map(li => li.textContent.trim());
      
      expect(skillTexts).toEqual([
        'OpenAI API (GPT-4, GPT-3.5)',
        'Anthropic Claude',
        'Google Gemini',
        'Ollama (local LLMs)',
        'Prompt Engineering',
        'AI Agent Development',
        'Pandas'
      ]);
    });
  });

  describe('Business Prompt Generator Card', () => {
    let projectCard;
    
    beforeEach(() => {
      const aiSection = document.getElementById('ai');
      const projectCards = aiSection.querySelectorAll('.project-card');
      // Fourth card in AI section is the Business Prompt Generator
      projectCard = projectCards[3];
    });

    it('renders correctly with proper title', () => {
      const title = projectCard.querySelector('.project-card__title');
      expect(title).toBeTruthy();
      expect(title.textContent.trim()).toBe('Business Prompt Generator');
    });

    it('displays correct icon image', () => {
      const icon = projectCard.querySelector('.project-card__icon img');
      expect(icon).toBeTruthy();
      expect(icon.getAttribute('src')).toBe('assets/prompt_generator_icon.png');
    });

    it('contains updated description with OpenRouter integration', () => {
      const description = projectCard.querySelector('.project-card__description');
      expect(description).toBeTruthy();
      expect(description.textContent).toContain('Interactive CLI tool');
      expect(description.textContent).toContain('structured LLM prompts');
      expect(description.textContent).toContain('10 business domains');
      expect(description.textContent).toContain('OpenRouter API integration');
      expect(description.textContent).toContain('GPT-4.1 Mini');
      expect(description.textContent).toContain('Claude 3.5 Haiku');
    });

    it('has correct GitHub link', () => {
      const link = projectCard.querySelector('.project-card__link');
      expect(link).toBeTruthy();
      expect(link.getAttribute('href')).toBe('https://github.com/Bytes0211/ai_engineering/tree/main/prompt_generator');
      expect(link.textContent).toContain('View Details');
    });
  });

  describe('Tech Stack Badges - Business Prompt Generator', () => {
    let projectCard;
    
    beforeEach(() => {
      const aiSection = document.getElementById('ai');
      const projectCards = aiSection.querySelectorAll('.project-card');
      projectCard = projectCards[3];
    });

    it('displays all 5 specified technologies', () => {
      const techBadges = projectCard.querySelectorAll('.project-card__tech-badge');
      expect(techBadges.length).toBe(5);
    });

    it('includes OpenRouter API badge', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const openRouterBadge = badges.find(badge => badge.textContent.trim() === 'OpenRouter API');
      expect(openRouterBadge).toBeTruthy();
    });

    it('includes Python badge', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const pythonBadge = badges.find(badge => badge.textContent.trim() === 'Python');
      expect(pythonBadge).toBeTruthy();
    });

    it('includes GPT-4.1 badge', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const gptBadge = badges.find(badge => badge.textContent.trim() === 'GPT-4.1');
      expect(gptBadge).toBeTruthy();
    });

    it('includes Claude 3.5 badge', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const claudeBadge = badges.find(badge => badge.textContent.trim() === 'Claude 3.5');
      expect(claudeBadge).toBeTruthy();
    });

    it('includes uv badge', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const uvBadge = badges.find(badge => badge.textContent.trim() === 'uv');
      expect(uvBadge).toBeTruthy();
    });

    it('displays tech badges in correct order', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const badgeTexts = badges.map(badge => badge.textContent.trim());
      
      expect(badgeTexts).toEqual([
        'OpenRouter API',
        'Python',
        'GPT-4.1',
        'Claude 3.5',
        'uv'
      ]);
    });
  });

  describe('Project Features List - Business Prompt Generator', () => {
    let projectCard;
    
    beforeEach(() => {
      const aiSection = document.getElementById('ai');
      const projectCards = aiSection.querySelectorAll('.project-card');
      projectCard = projectCards[3];
    });

    it('displays all 4 features', () => {
      const features = projectCard.querySelectorAll('.project-card__features li');
      expect(features.length).toBe(4);
    });

    it('lists 10 pre-configured templates feature', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const templatesFeature = features.find(li => 
        li.textContent.includes('10 pre-configured templates') &&
        li.textContent.includes('business') &&
        li.textContent.includes('support') &&
        li.textContent.includes('strategy')
      );
      expect(templatesFeature).toBeTruthy();
    });

    it('lists multi-model support feature', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const modelFeature = features.find(li => 
        li.textContent.includes('Multi-model support') &&
        li.textContent.includes('OpenRouter') &&
        li.textContent.includes('GPT-4.1 Mini') &&
        li.textContent.includes('Claude 3.5 Haiku')
      );
      expect(modelFeature).toBeTruthy();
    });

    it('lists three-role prompt architecture feature', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const architectureFeature = features.find(li => 
        li.textContent.includes('Three-role prompt architecture') &&
        li.textContent.includes('system/developer/user') &&
        li.textContent.includes('markdown output')
      );
      expect(architectureFeature).toBeTruthy();
    });

    it('lists interactive CLI feature', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const cliFeature = features.find(li => 
        li.textContent.includes('Interactive CLI') &&
        li.textContent.includes('multi-line input support') &&
        li.textContent.includes('comprehensive testing')
      );
      expect(cliFeature).toBeTruthy();
    });

    it('features are listed in correct order', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const featureTexts = features.map(li => li.textContent.trim());
      
      expect(featureTexts).toEqual([
        '10 pre-configured templates (business, support, strategy, HR, marketing, etc.)',
        'Multi-model support via OpenRouter (GPT-4.1 Mini & Claude 3.5 Haiku)',
        'Three-role prompt architecture (system/developer/user) with markdown output',
        'Interactive CLI with multi-line input support & comprehensive testing'
      ]);
    });
  });

  describe('Integration Tests - Overall Portfolio Structure', () => {
    it('AI section contains exactly 4 project cards', () => {
      const aiSection = document.getElementById('ai');
      const projectCards = aiSection.querySelectorAll('.project-card');
      expect(projectCards.length).toBe(4);
    });

    it('About section exists with proper structure', () => {
      const aboutSection = document.getElementById('about');
      expect(aboutSection).toBeTruthy();
      expect(aboutSection.querySelector('.section__title')).toBeTruthy();
      expect(aboutSection.querySelector('.about__content')).toBeTruthy();
    });

    it('About section has all 6 skill groups', () => {
      const aboutSection = document.getElementById('about');
      const skillGroups = aboutSection.querySelectorAll('.about__skill-group');
      expect(skillGroups.length).toBe(6);
      
      const groupTitles = Array.from(skillGroups).map(group => 
        group.querySelector('h4')?.textContent.trim()
      );
      
      expect(groupTitles).toContain('Languages');
      expect(groupTitles).toContain('Cloud & Infrastructure');
      expect(groupTitles).toContain('Data Engineering');
      expect(groupTitles).toContain('Databases');
      expect(groupTitles).toContain('AI & Analytics');
      expect(groupTitles).toContain('Tools');
    });

    it('portfolio title includes AI Integration Specialist', () => {
      const heroTitle = document.querySelector('.hero__title');
      expect(heroTitle).toBeTruthy();
      expect(heroTitle.textContent).toContain('AI Integration Specialist');
    });
  });

  describe('Footer - Bluesky SVG Social Link', () => {
    let blueskyLink;
    
    beforeEach(() => {
      const footer = document.querySelector('.footer');
      blueskyLink = footer.querySelector('a[href="https://bsky.app/profile/stevenwcotton.bsky.social"]');
    });

    it('Bluesky link exists in footer', () => {
      expect(blueskyLink).toBeTruthy();
    });

    it('has correct href attribute', () => {
      expect(blueskyLink.getAttribute('href')).toBe('https://bsky.app/profile/stevenwcotton.bsky.social');
    });

    it('opens in new tab with target="_blank"', () => {
      expect(blueskyLink.getAttribute('target')).toBe('_blank');
    });

    it('has rel="noopener" for security', () => {
      expect(blueskyLink.getAttribute('rel')).toBe('noopener');
    });

    it('has title attribute set to "Bluesky"', () => {
      expect(blueskyLink.getAttribute('title')).toBe('Bluesky');
    });

    it('has md-social__link class', () => {
      expect(blueskyLink.classList.contains('md-social__link')).toBe(true);
    });

    it('contains an SVG element', () => {
      const svg = blueskyLink.querySelector('svg');
      expect(svg).toBeTruthy();
    });

    it('SVG has correct xmlns attribute', () => {
      const svg = blueskyLink.querySelector('svg');
      expect(svg.getAttribute('xmlns')).toBe('http://www.w3.org/2000/svg');
    });

    it('SVG has correct viewBox for Font Awesome icon', () => {
      const svg = blueskyLink.querySelector('svg');
      expect(svg.getAttribute('viewBox')).toBe('0 0 576 512');
    });

    it('SVG contains path element with Bluesky icon data', () => {
      const path = blueskyLink.querySelector('svg path');
      expect(path).toBeTruthy();
      expect(path.getAttribute('d')).toContain('M407.8 294.7');
      expect(path.getAttribute('d')).toContain('M288 227.1');
    });

    it('SVG comment includes Font Awesome attribution', () => {
      const svg = blueskyLink.querySelector('svg');
      const svgHTML = svg.innerHTML;
      expect(svgHTML).toContain('Font Awesome Free 7.1.0');
      expect(svgHTML).toContain('fontawesome.com/license/free');
    });
  });

  describe('GoatCounter Analytics Integration', () => {
    it('includes GoatCounter script in the HTML', () => {
      const scripts = document.querySelectorAll('script');
      const goatCounterScript = Array.from(scripts).find(script => 
        script.getAttribute('src') === '//gc.zgo.at/count.js'
      );
      expect(goatCounterScript).toBeTruthy();
    });

    it('GoatCounter script has correct data-goatcounter attribute', () => {
      const scripts = document.querySelectorAll('script');
      const goatCounterScript = Array.from(scripts).find(script => 
        script.getAttribute('src') === '//gc.zgo.at/count.js'
      );
      
      expect(goatCounterScript).toBeTruthy();
      expect(goatCounterScript.getAttribute('data-goatcounter')).toBe('https://stevencotton.goatcounter.com/count');
    });

    it('GoatCounter script loads asynchronously', () => {
      const scripts = document.querySelectorAll('script');
      const goatCounterScript = Array.from(scripts).find(script => 
        script.getAttribute('src') === '//gc.zgo.at/count.js'
      );
      
      expect(goatCounterScript).toBeTruthy();
      expect(goatCounterScript.hasAttribute('async')).toBe(true);
    });
  });

  describe('Navigation - Cloud Computing Link Removal', () => {
    it('Cloud Computing navigation link is not present in header', () => {
      const header = document.querySelector('.header');
      const navLinks = header.querySelectorAll('.header__nav-link');
      const navLinkTexts = Array.from(navLinks).map(link => link.textContent.trim());
      
      expect(navLinkTexts).not.toContain('Cloud Computing');
    });

    it('header contains only 4 navigation links', () => {
      const header = document.querySelector('.header');
      const navLinks = header.querySelectorAll('.header__nav-link');
      
      expect(navLinks.length).toBe(4);
    });

    it('navigation links are Home, Data Engineering, AI, and About', () => {
      const header = document.querySelector('.header');
      const navLinks = header.querySelectorAll('.header__nav-link');
      const navLinkTexts = Array.from(navLinks).map(link => link.textContent.trim());
      
      expect(navLinkTexts).toEqual(['Home', 'Data Engineering', 'AI', 'About']);
    });
  });

  describe('Sections - Cloud Computing Section Removal', () => {
    it('Cloud Computing section is not present on the page', () => {
      const cloudSection = document.getElementById('cloud-computing');
      expect(cloudSection).toBeNull();
    });

    it('page contains only expected sections: home, data-engineering, ai, about', () => {
      const sections = document.querySelectorAll('section[id]');
      const sectionIds = Array.from(sections).map(section => section.id);
      
      expect(sectionIds).toEqual(['home', 'data-engineering', 'ai', 'about']);
    });
  });

  describe('StratifyAI Multi-Provider LLM Platform Card', () => {
    let projectCard;
    
    beforeEach(() => {
      const aiSection = document.getElementById('ai');
      const projectCards = aiSection.querySelectorAll('.project-card');
      // First card in AI section is StratifyAI
      projectCard = projectCards[0];
    });

    it('is displayed in the AI section', () => {
      expect(projectCard).toBeTruthy();
    });

    it('is the first card in the AI section', () => {
      const aiSection = document.getElementById('ai');
      const projectCards = aiSection.querySelectorAll('.project-card');
      const firstCard = projectCards[0];
      const title = firstCard.querySelector('.project-card__title');
      
      expect(title.textContent.trim()).toBe('StratifyAI Multi-Provider LLM Platform');
    });

    it('has correct title', () => {
      const title = projectCard.querySelector('.project-card__title');
      expect(title).toBeTruthy();
      expect(title.textContent.trim()).toBe('StratifyAI Multi-Provider LLM Platform');
    });

    it('contains correct image with proper path', () => {
      const iconImg = projectCard.querySelector('.project-card__icon img');
      expect(iconImg).toBeTruthy();
      expect(iconImg.getAttribute('src')).toBe('assets/stratifyai_icon.png');
    });

    it('image has correct alt text', () => {
      const iconImg = projectCard.querySelector('.project-card__icon img');
      expect(iconImg.getAttribute('alt')).toBe('StratifyAI Icon');
    });

    it('contains comprehensive description', () => {
      const description = projectCard.querySelector('.project-card__description');
      expect(description).toBeTruthy();
      expect(description.textContent).toContain('Production-ready Python module');
      expect(description.textContent).toContain('unified abstraction');
      expect(description.textContent).toContain('9 LLM providers');
      expect(description.textContent).toContain('OpenAI');
      expect(description.textContent).toContain('Anthropic');
      expect(description.textContent).toContain('Google');
      expect(description.textContent).toContain('DeepSeek');
      expect(description.textContent).toContain('Groq');
      expect(description.textContent).toContain('Grok');
      expect(description.textContent).toContain('OpenRouter');
      expect(description.textContent).toContain('Ollama');
      expect(description.textContent).toContain('AWS Bedrock');
      expect(description.textContent).toContain('intelligent routing');
      expect(description.textContent).toContain('cost tracking');
      expect(description.textContent).toContain('zero vendor lock-in');
    });

    it('has correct GitHub link', () => {
      const link = projectCard.querySelector('.project-card__link');
      expect(link).toBeTruthy();
      expect(link.getAttribute('href')).toBe('https://github.com/Bytes0211/stratifyai');
      expect(link.textContent).toContain('View Details');
    });
  });

  describe('Tech Stack Badges - StratifyAI', () => {
    let projectCard;
    
    beforeEach(() => {
      const aiSection = document.getElementById('ai');
      const projectCards = aiSection.querySelectorAll('.project-card');
      projectCard = projectCards[0];
    });

    it('displays all 5 specified technologies', () => {
      const techBadges = projectCard.querySelectorAll('.project-card__tech-badge');
      expect(techBadges.length).toBe(5);
    });

    it('includes Python badge', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const pythonBadge = badges.find(badge => badge.textContent.trim() === 'Python');
      expect(pythonBadge).toBeTruthy();
    });

    it('includes OpenAI SDK badge', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const openAIBadge = badges.find(badge => badge.textContent.trim() === 'OpenAI SDK');
      expect(openAIBadge).toBeTruthy();
    });

    it('includes Anthropic SDK badge', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const anthropicBadge = badges.find(badge => badge.textContent.trim() === 'Anthropic SDK');
      expect(anthropicBadge).toBeTruthy();
    });

    it('includes Google AI badge', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const googleBadge = badges.find(badge => badge.textContent.trim() === 'Google AI');
      expect(googleBadge).toBeTruthy();
    });

    it('includes pytest badge', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const pytestBadge = badges.find(badge => badge.textContent.trim() === 'pytest');
      expect(pytestBadge).toBeTruthy();
    });

    it('displays tech badges in correct order', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const badgeTexts = badges.map(badge => badge.textContent.trim());
      
      expect(badgeTexts).toEqual([
        'Python',
        'OpenAI SDK',
        'Anthropic SDK',
        'Google AI',
        'pytest'
      ]);
    });
  });

  describe('Project Features List - StratifyAI', () => {
    let projectCard;
    
    beforeEach(() => {
      const aiSection = document.getElementById('ai');
      const projectCards = aiSection.querySelectorAll('.project-card');
      projectCard = projectCards[0];
    });

    it('displays all 4 features', () => {
      const features = projectCard.querySelectorAll('.project-card__features li');
      expect(features.length).toBe(4);
    });

    it('lists 9 provider implementations feature', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const providerFeature = features.find(li => 
        li.textContent.includes('9 provider implementations') &&
        li.textContent.includes('strategy pattern')
      );
      expect(providerFeature).toBeTruthy();
    });

    it('lists intelligent routing feature', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const routingFeature = features.find(li => 
        li.textContent.includes('Intelligent routing') &&
        li.textContent.includes('cost-optimized') &&
        li.textContent.includes('quality-focused') &&
        li.textContent.includes('hybrid')
      );
      expect(routingFeature).toBeTruthy();
    });

    it('lists cost tracking feature', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const costFeature = features.find(li => 
        li.textContent.includes('Cost tracking') &&
        li.textContent.includes('$0.0001') &&
        li.textContent.includes('budget enforcement')
      );
      expect(costFeature).toBeTruthy();
    });

    it('lists streaming and additional features', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const streamingFeature = features.find(li => 
        li.textContent.includes('Streaming support') &&
        li.textContent.includes('retry logic') &&
        li.textContent.includes('caching') &&
        li.textContent.includes('comprehensive testing')
      );
      expect(streamingFeature).toBeTruthy();
    });

    it('features are listed in correct order', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const featureTexts = features.map(li => li.textContent.trim());
      
      expect(featureTexts).toEqual([
        '9 provider implementations with strategy pattern',
        'Intelligent routing (cost-optimized, quality-focused, hybrid)',
        'Cost tracking accurate to $0.0001 with budget enforcement',
        'Streaming support, retry logic, caching, comprehensive testing'
      ]);
    });
  });
});
