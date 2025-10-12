/**
 * Portfolio Data Manager
 * Loads and manages portfolio data from JSON file
 */

class PortfolioData {
    constructor() {
        this.data = null;
        this.loaded = false;
    }

    /**
     * Load portfolio data from JSON file
     */
    async load() {
        try {
            const response = await fetch('data/portfolio-data.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            this.data = await response.json();
            this.loaded = true;
            return this.data;
        } catch (error) {
            console.error('Error loading portfolio data:', error);
            throw error;
        }
    }

    /**
     * Get personal information
     */
    getPersonalInfo() {
        return this.data?.personalInfo || {};
    }

    /**
     * Get social links
     */
    getSocialLinks() {
        return this.data?.socialLinks || [];
    }

    /**
     * Get skills by category
     */
    getSkills() {
        return this.data?.skills || [];
    }

    /**
     * Get education history
     */
    getEducation() {
        return this.data?.education || [];
    }

    /**
     * Get work experience
     */
    getWork() {
        return this.data?.work || [];
    }

    /**
     * Get expertise areas
     */
    getExpertise() {
        return this.data?.expertise || [];
    }

    /**
     * Get projects
     */
    getProjects() {
        return this.data?.projects || [];
    }

    /**
     * Get contact form configuration
     */
    getContactForm() {
        return this.data?.contactForm || {};
    }

    /**
     * Update personal information
     */
    updatePersonalInfo(updates) {
        if (this.data?.personalInfo) {
            this.data.personalInfo = { ...this.data.personalInfo, ...updates };
        }
    }

    /**
     * Add a new project
     */
    addProject(project) {
        if (this.data?.projects) {
            this.data.projects.push(project);
        }
    }

    /**
     * Add a new skill
     */
    addSkill(categoryIndex, skill) {
        if (this.data?.skills && this.data.skills[categoryIndex]) {
            this.data.skills[categoryIndex].items.push(skill);
        }
    }

    /**
     * Export data as JSON
     */
    exportJSON() {
        return JSON.stringify(this.data, null, 2);
    }
}

// Create global instance
const portfolioData = new PortfolioData();

// Initialize data on DOM load
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializePortfolioData);
} else {
    initializePortfolioData();
}

async function initializePortfolioData() {
    try {
        await portfolioData.load();
        console.log('Portfolio data loaded successfully');
        
        // Trigger custom event to notify that data is ready
        const event = new CustomEvent('portfolioDataLoaded', { detail: portfolioData.data });
        document.dispatchEvent(event);
    } catch (error) {
        console.error('Failed to initialize portfolio data:', error);
    }
}
