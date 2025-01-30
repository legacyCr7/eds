export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  [...block.children].forEach((row) => {
    [...row.children].forEach((col, index) => {
      if (index === 1) {
        col.parentElement.style.display = "flex";

        col.innerHTML = "";
        col.innerHTML = `
            <div class="login-form">
              <h2>Login with your SkillStone Account</h2>
              <form>
                <div class="form-group">
                  <input type="email" id="email" name="email" placeholder="Email ID*" required>
                </div>
                <div class="form-group">
                  <input type="password" id="password" name="password" placeholder="Password*" required>
                </div>
              </form>
              <div class="form-links">
                <button type="submit" class="login-button">Login</button>
                <a href="#" class="forgot-password">Forgot Password?</a>
              </div>
            <p>Don't have an account? <a href="#" class="register-link">Register Now</a></p>
            </div>
          `;
      }
    });
  });
}
