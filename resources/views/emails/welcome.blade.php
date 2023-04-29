<!DOCTYPE html>

<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/js/all.min.js" integrity="sha512-Z7tzFdpSYb4p9a4cKifC4vY8hqssJOl+Z0SdxbS1+rIKMJtjrZDYKTF9D+eT/hJH/p0TfO2IRxTGKdLGbubDDw==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    
    <style>
        body {
            font-family: Helvetica, sans-serif;
            font-size: 16px;
            line-height: 1.5;
            color: #333;
        }

        .header-image {
        width: 50%;
        max-width: 100%;
        height: 50%;
        display: block;
        margin: 0 auto;
        }

        h1, h2, h3, h4, h5, h6 {
            font-weight: bold;
            margin-top: 0;
        }
        p {
            margin-top: 0;
            margin-bottom: 1.5rem;
        }
        ul {
            margin-top: 0;
            margin-bottom: 1.5rem;
            padding-left: 1.5rem;
        }
        li {
            margin-top: 0;
            margin-bottom: 0.5rem;
        }
        a {
            color: #7644C0;
            text-decoration: none;
        }
        a:hover {
            color: #7644C0;
            text-decoration: underline;
        }
        .header-image {
            width: 100%;
            max-width: 600px;
            height: auto;
            display: block;
            margin: 0 auto;
        }
        .primary-color {
            color: #7644C0;
        }
        .secondary-color {
            color: #333;
        }
        .background-color {
            background-color: #f7f7f7;
        }
        .social-icons {
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
            color: #7644C0
            
        }
        .social-icon {
            margin-right: 1.5rem;
            font-size: 1.5rem;
            color: #7644C0
        }
        @media screen and (max-width: 600px) {
            body {
                font-size: 10px;
            }
        }
    </style>
</head>
<body>

    <table cellpadding="0" cellspacing="0" border="0" width="100%" class="background-color">
        <tr>
            <td align="center">
                <table cellpadding="0" cellspacing="0" border="0" width="100%" class="background-color">
                    <tr>
                      <td align="center">
                        <table cellpadding="0" cellspacing="0" border="0" width="600">
                          <tr>
                            <td style="padding: 40px 20px;">
                              {{-- <img src="{{ asset('images/header.png') }}" alt="{{ config('app.name') }}" class="header-image"> --}}
                              <h1 style="text-align: center; margin-bottom: 40px;">Welcome to <span class="primary-color">{{ config('app.name') }}</span>!</h1>
                              <p class="secondary-color">Dear {{ $user->name }},</p>
                              <p class="secondary-color">Thank you for registering with <span class="primary-color">{{ config('app.name') }}</span>. We are excited to have you as a member of our community!</p>
                              <p class="secondary-color">Your account has been successfully created with the following details:</p>
                              <ul class="secondary-color">
                                <li>Name: {{ $user->name }}</li>
                                <li>Email: {{ $user->email }}</li>
                                <li>Phone: {{ $user->phone }}</li>
                              </ul>
                              <p>You can now <a href="{{ route('login') }}">log in</a> to your account using your email address and the password you provided during registration.</p>
                              <p>If you have any questions or concerns, please don't hesitate to <a href="{{ route('login') }}">contact us</a>.</p>
                              <p>Best regards,</p>
                              <h4>The {{ config('app.name') }} Team</h4>
                            </td>
                          </tr>
                          <tr>
                            <td align="center" style="padding: 20px 0;">
                              <div class="social-icons">
                                <a href="https://www.facebook.com/bookboost/?locale=sv_SE"><i class="fab fa-facebook-f social-icon"></i>facebook</a>
                                <a href="https://twitter.com/bookboost_ab"><i class="fab fa-twitter social-icon"></i>twitter</a>
                                <a href="https://www.linkedin.com/company/bookboost/?originalSubdomain=se"><i class="fab fa-instagram social-icon"></i>linkedin</a>
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                  
            </td>
        </tr>
    </table>
   
    
</body>
</html>
