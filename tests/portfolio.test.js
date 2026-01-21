import { describe, it, expect, beforeEach } from 'vitest';
import { readFileSync } from 'fs';
import { join } from 'path';

describe('Portfolio HTML Content Tests', () => {
  let document;
  
  beforeEach(() => {
    const html = readFileSync(join(process.cwd(), 'index.html'), 'utf-8');
    document = new DOMParser().parseFromString(html, 'text/html');
  });

  describe('AI Engineering Learning Project Card', () => {
    let projectCard;
    
    beforeEach(() => {
      const aiSection = document.getElementById('ai');
      const projectCards = aiSection.querySelectorAll('.project-card');
      // Third card in AI section is the AI Engineering Learning Project
      projectCard = projectCards[2];
    });

    it('renders correctly with proper title', () => {
      const title = projectCard.querySelector('.project-card__title');
      expect(title).toBeTruthy();
      expect(title.textContent.trim()).toBe('AI Engineering Learning Project');
    });

    it('displays correct icon', () => {
      const icon = projectCard.querySelector('.project-card__icon');
      expect(icon).toBeTruthy();
      expect(icon.textContent.trim()).toBe('🎓');
    });

    it('contains comprehensive description', () => {
      const description = projectCard.querySelector('.project-card__description');
      expect(description).toBeTruthy();
      expect(description.textContent).toContain('Comprehensive LLM engineering project');
      expect(description.textContent).toContain('production-ready Python implementations');
      expect(description.textContent).toContain('AI agents');
      expect(description.textContent).toContain('multi-provider API integration');
      expect(description.textContent).toContain('conversational AI systems');
    });

    it('has correct GitHub link', () => {
      const link = projectCard.querySelector('.project-card__link');
      expect(link).toBeTruthy();
      expect(link.getAttribute('href')).toBe('https://github.com/Bytes0211/ai_engineering');
      expect(link.textContent).toContain('View Details');
    });
  });

  describe('Tech Stack Badges - AI Engineering Project', () => {
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

    it('includes Anthropic Claude badge', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const claudeBadge = badges.find(badge => badge.textContent.trim() === 'Anthropic Claude');
      expect(claudeBadge).toBeTruthy();
    });

    it('includes Google Gemini badge', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const geminiBadge = badges.find(badge => badge.textContent.trim() === 'Google Gemini');
      expect(geminiBadge).toBeTruthy();
    });

    it('includes Ollama badge', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const ollamaBadge = badges.find(badge => badge.textContent.trim() === 'Ollama');
      expect(ollamaBadge).toBeTruthy();
    });

    it('includes Python badge', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const pythonBadge = badges.find(badge => badge.textContent.trim() === 'Python');
      expect(pythonBadge).toBeTruthy();
    });

    it('displays tech badges in correct order', () => {
      const badges = Array.from(projectCard.querySelectorAll('.project-card__tech-badge'));
      const badgeTexts = badges.map(badge => badge.textContent.trim());
      
      expect(badgeTexts).toEqual([
        'OpenAI API',
        'Anthropic Claude',
        'Google Gemini',
        'Ollama',
        'Python'
      ]);
    });
  });

  describe('Project Features List - AI Engineering Project', () => {
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

    it('lists AI web scraper/summarizer agent feature', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const scraperFeature = features.find(li => 
        li.textContent.includes('AI web scraper/summarizer agent') &&
        li.textContent.includes('customizable roles')
      );
      expect(scraperFeature).toBeTruthy();
    });

    it('lists multi-provider LLM integration feature', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const llmFeature = features.find(li => 
        li.textContent.includes('Multi-provider LLM integration') &&
        li.textContent.includes('6+ providers')
      );
      expect(llmFeature).toBeTruthy();
    });

    it('lists prompt engineering feature', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const promptFeature = features.find(li => 
        li.textContent.includes('Prompt engineering') &&
        li.textContent.includes('optimization techniques')
      );
      expect(promptFeature).toBeTruthy();
    });

    it('lists production-ready code feature', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const productionFeature = features.find(li => 
        li.textContent.includes('Production-ready code') &&
        li.textContent.includes('comprehensive testing')
      );
      expect(productionFeature).toBeTruthy();
    });

    it('features are listed in correct order', () => {
      const features = Array.from(projectCard.querySelectorAll('.project-card__features li'));
      const featureTexts = features.map(li => li.textContent.trim());
      
      expect(featureTexts).toEqual([
        'AI web scraper/summarizer agent with customizable roles',
        'Multi-provider LLM integration (6+ providers)',
        'Prompt engineering & optimization techniques',
        'Production-ready code with comprehensive testing'
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

  describe('Integration Tests - Overall Portfolio Structure', () => {
    it('AI section contains exactly 3 project cards', () => {
      const aiSection = document.getElementById('ai');
      const projectCards = aiSection.querySelectorAll('.project-card');
      expect(projectCards.length).toBe(3);
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
});
