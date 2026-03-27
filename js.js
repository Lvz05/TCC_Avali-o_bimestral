// Page Navigation
        function showPage(pageName) {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            if (pageName === 'login') {
                document.getElementById('loginPage').classList.add('active');
            } else if (pageName === 'signup') {
                document.getElementById('signupPage').classList.add('active');
            } else if (pageName === 'forgotPassword') {
                document.getElementById('forgotPasswordPage').classList.add('active');
                resetForgotPassword();
            }
        }

        // Login Form Handler
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('loginEmail').value;
            const password = document.getElementById('loginPassword').value;
            console.log('Login:', { email, password });
            alert('Login realizado com sucesso!\nE-mail: ' + email);
        });

        // Signup Form Handler
        document.getElementById('signupForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const name = document.getElementById('signupName').value;
            const email = document.getElementById('signupEmail').value;
            const phone = document.getElementById('signupPhone').value;
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;
            
            if (password !== confirmPassword) {
                alert('As senhas não coincidem!');
                return;
            }
            
            console.log('Cadastro:', { name, email, phone, password });
            alert('Cadastro realizado com sucesso!\nNome: ' + name + '\nE-mail: ' + email);
            showPage('login');
        });

        // Forgot Password Form Handler
        document.getElementById('forgotPasswordForm').addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.getElementById('forgotEmail').value;
            console.log('Recuperação de senha para:', email);
            
            document.getElementById('sentEmailDisplay').textContent = email;
            document.getElementById('forgotPasswordFormSection').classList.add('hidden');
            document.getElementById('forgotPasswordSuccessSection').classList.remove('hidden');
        });

        // Reset Forgot Password Form
        function resetForgotPassword() {
            document.getElementById('forgotPasswordFormSection').classList.remove('hidden');
            document.getElementById('forgotPasswordSuccessSection').classList.add('hidden');
            document.getElementById('forgotEmail').value = '';
        }