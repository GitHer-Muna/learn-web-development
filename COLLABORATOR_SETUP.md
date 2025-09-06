# 👥 Adding Collaborators to Your Repository

## Step-by-Step Guide to Add Your Friends as Collaborators

### Method 1: Via GitHub Web Interface (Recommended)

1. **Go to your repository on GitHub:**
   ```
   https://github.com/GitHer-Muna/learn-web-development
   ```

2. **Navigate to Settings:**
   - Click on the **"Settings"** tab (in your repository)
   - Make sure you're in the repository settings, not your personal account settings

3. **Access Collaborators:**
   - In the left sidebar, click **"Collaborators and teams"**
   - Or look for **"Manage access"** section

4. **Add Each Friend:**
   - Click **"Add people"** or **"Invite a collaborator"**
   - Enter their GitHub usernames one by one:
     - `gokulupadhyayguragain`
     - `ImmrBhattarai` 
     - `lok001esh`
   - Select their profile when it appears
   - Choose permission level (**"Write"** recommended for collaborators)
   - Click **"Add [username] to this repository"**

5. **Send Invitations:**
   - GitHub will send email invitations to each friend
   - They need to accept the invitation to become collaborators

### Method 2: Via GitHub CLI (Alternative)

If you have GitHub CLI installed:

```bash
# Install GitHub CLI first (if not already installed)
gh auth login

# Add collaborators
gh api repos/GitHer-Muna/learn-web-development/collaborators/gokulupadhyayguragain \
  --method=PUT \
  --field permission=push

gh api repos/GitHer-Muna/learn-web-development/collaborators/ImmrBhattarai \
  --method=PUT \
  --field permission=push

gh api repos/GitHer-Muna/learn-web-development/collaborators/lok001esh \
  --method=PUT \
  --field permission=push
```

## 🔐 Permission Levels Explained

- **Read**: Can view and clone the repository
- **Triage**: Can manage issues and pull requests
- **Write**: Can push changes directly to the repository ⭐ **Recommended**
- **Maintain**: Can manage some repository settings
- **Admin**: Full access including repository settings

## 📧 What Happens Next?

1. **Invitations Sent**: Each friend gets an email invitation
2. **Accept Required**: They must click "Accept invitation" 
3. **Access Granted**: Once accepted, they can:
   - Clone the repository
   - Create branches
   - Push changes
   - Create pull requests
   - Review code
   - Manage issues

## 🎯 Collaboration Workflow Suggestions

### For Your Friends:
```bash
# Clone the repository
git clone https://github.com/GitHer-Muna/learn-web-development.git
cd learn-web-development

# Create a feature branch
git checkout -b feature/your-feature-name

# Make changes and commit
git add .
git commit -m "Add new feature"

# Push and create pull request
git push origin feature/your-feature-name
```

### Best Practices:
- **Use branches** for new features
- **Create pull requests** for code review
- **Write clear commit messages**
- **Test before pushing**
- **Communicate** about what you're working on

## 🛡️ Repository Protection (Optional)

Consider enabling branch protection rules:

1. Go to **Settings > Branches**
2. Click **"Add rule"**
3. Protect the **main** branch:
   - ✅ Require pull request reviews
   - ✅ Require status checks to pass
   - ✅ Restrict pushes to main branch

This ensures all changes go through code review!

## 📞 Need Help?

If you encounter issues:
- Check [GitHub's Collaborator Documentation](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-access-to-your-personal-repositories/inviting-collaborators-to-a-personal-repository)
- Ask in repository discussions
- Contact GitHub Support

---

**Remember**: After adding collaborators, you can delete this file if you want to keep the repository clean!
