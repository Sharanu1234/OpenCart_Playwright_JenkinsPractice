# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: db\customer-registration-e2e.spec.ts >> OpenCart Customer Registration - UI + Admin + DB Validation @master @end-to-end @db >> Register customer, verify in admin portal and MySQL @db
- Location: tests\db\customer-registration-e2e.spec.ts:22:9

# Error details

```
AggregateError: 
```

```
Error: connect ECONNREFUSED ::1:3306
```

```
Error: connect ECONNREFUSED 127.0.0.1:3306
```

# Page snapshot

```yaml
- generic [active] [ref=f3e1]:
  - navigation [ref=f3e2]:
    - generic [ref=f3e3]:
      - button "$ Currency " [ref=f3e7] [cursor=pointer]:
        - strong [ref=f3e8]: $
        - text: Currency
        - generic [ref=f3e9]: 
      - list [ref=f3e11]:
        - listitem [ref=f3e12]:
          - link "" [ref=f3e13] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
          - text: "123456789"
        - listitem [ref=f3e15]:
          - link " My Account" [ref=f3e16] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - generic [ref=f3e17]: 
            - text: My Account
        - listitem [ref=f3e19]:
          - link " Wish List (0)" [ref=f3e20] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - generic [ref=f3e21]: 
            - text: Wish List (0)
        - listitem [ref=f3e22]:
          - link " Shopping Cart" [ref=f3e23] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/cart
            - generic [ref=f3e24]: 
            - text: Shopping Cart
        - listitem [ref=f3e25]:
          - link " Checkout" [ref=f3e26] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=checkout/checkout
            - generic [ref=f3e27]: 
            - text: Checkout
  - banner [ref=f3e28]:
    - generic [ref=f3e30]:
      - heading [level=1] [ref=f3e33]:
        - link "Qafox.com" [ref=f3e34] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - generic [ref=f3e36]:
        - textbox "Search" [ref=f3e37]
        - button "" [ref=f3e39] [cursor=pointer]
      - button " 0 item(s) - $0.00" [ref=f3e43] [cursor=pointer]:
        - generic [ref=f3e44]: 
        - text: 0 item(s) - $0.00
  - navigation [ref=f3e46]:
    - generic: 
    - list [ref=f3e48]:
      - listitem [ref=f3e49]:
        - link "Desktops" [ref=f3e50] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=20
      - listitem [ref=f3e51]:
        - link "Laptops & Notebooks" [ref=f3e52] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=18
      - listitem [ref=f3e53]:
        - link "Components" [ref=f3e54] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=25
      - listitem [ref=f3e55]:
        - link "Tablets" [ref=f3e56] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=57
      - listitem [ref=f3e57]:
        - link "Software" [ref=f3e58] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=17
      - listitem [ref=f3e59]:
        - link "Phones & PDAs" [ref=f3e60] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=24
      - listitem [ref=f3e61]:
        - link "Cameras" [ref=f3e62] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=33
      - listitem [ref=f3e63]:
        - link "MP3 Players" [ref=f3e64] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=product/category&path=34
  - generic [ref=f3e65]:
    - list [ref=f3e66]:
      - listitem [ref=f3e67]:
        - link "" [ref=f3e68] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=common/home
      - listitem [ref=f3e70]:
        - link "Account" [ref=f3e71] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/account
      - listitem [ref=f3e72]:
        - link "Success" [ref=f3e73] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/success
    - generic [ref=f3e74]:
      - generic [ref=f3e75]:
        - heading "Your Account Has Been Created!" [level=1] [ref=f3e76]
        - paragraph [ref=f3e77]: Congratulations! Your new account has been successfully created!
        - paragraph [ref=f3e78]: You can now take advantage of member privileges to enhance your online shopping experience with us.
        - paragraph [ref=f3e79]: If you have ANY questions about the operation of this online shop, please e-mail the store owner.
        - paragraph [ref=f3e80]:
          - text: A confirmation has been sent to the provided e-mail address. If you have not received it within the hour, please
          - link "contact us" [ref=f3e81] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
          - text: .
        - link "Continue" [ref=f3e83] [cursor=pointer]:
          - /url: https://tutorialsninja.com/demo/index.php?route=account/account
      - complementary [ref=f3e84]:
        - generic [ref=f3e85]:
          - link "My Account" [ref=f3e86] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/account
          - link "Edit Account" [ref=f3e87] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/edit
          - link "Password" [ref=f3e88] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/password
          - link "Address Book" [ref=f3e89] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/address
          - link "Wish List" [ref=f3e90] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
          - link "Order History" [ref=f3e91] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/order
          - link "Downloads" [ref=f3e92] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/download
          - link "Recurring payments" [ref=f3e93] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/recurring
          - link "Reward Points" [ref=f3e94] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/reward
          - link "Returns" [ref=f3e95] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/return
          - link "Transactions" [ref=f3e96] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/transaction
          - link "Newsletter" [ref=f3e97] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
          - link "Logout" [ref=f3e98] [cursor=pointer]:
            - /url: https://tutorialsninja.com/demo/index.php?route=account/logout
  - contentinfo [ref=f3e99]:
    - generic [ref=f3e100]:
      - generic [ref=f3e101]:
        - generic [ref=f3e102]:
          - heading "Information" [level=5] [ref=f3e103]
          - list [ref=f3e104]:
            - listitem [ref=f3e105]:
              - link "About Us" [ref=f3e106] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=4
            - listitem [ref=f3e107]:
              - link "Delivery Information" [ref=f3e108] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=6
            - listitem [ref=f3e109]:
              - link "Privacy Policy" [ref=f3e110] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=3
            - listitem [ref=f3e111]:
              - link "Terms & Conditions" [ref=f3e112] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/information&information_id=5
        - generic [ref=f3e113]:
          - heading "Customer Service" [level=5] [ref=f3e114]
          - list [ref=f3e115]:
            - listitem [ref=f3e116]:
              - link "Contact Us" [ref=f3e117] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/contact
            - listitem [ref=f3e118]:
              - link "Returns" [ref=f3e119] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/return/add
            - listitem [ref=f3e120]:
              - link "Site Map" [ref=f3e121] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=information/sitemap
        - generic [ref=f3e122]:
          - heading "Extras" [level=5] [ref=f3e123]
          - list [ref=f3e124]:
            - listitem [ref=f3e125]:
              - link "Brands" [ref=f3e126] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/manufacturer
            - listitem [ref=f3e127]:
              - link "Gift Certificates" [ref=f3e128] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/voucher
            - listitem [ref=f3e129]:
              - link "Affiliate" [ref=f3e130] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=affiliate/login
            - listitem [ref=f3e131]:
              - link "Specials" [ref=f3e132] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=product/special
        - generic [ref=f3e133]:
          - heading "My Account" [level=5] [ref=f3e134]
          - list [ref=f3e135]:
            - listitem [ref=f3e136]:
              - link "My Account" [ref=f3e137] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/account
            - listitem [ref=f3e138]:
              - link "Order History" [ref=f3e139] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/order
            - listitem [ref=f3e140]:
              - link "Wish List" [ref=f3e141] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/wishlist
            - listitem [ref=f3e142]:
              - link "Newsletter" [ref=f3e143] [cursor=pointer]:
                - /url: https://tutorialsninja.com/demo/index.php?route=account/newsletter
      - separator [ref=f3e144]
      - paragraph [ref=f3e145]:
        - text: Powered By
        - link "OpenCart" [ref=f3e146] [cursor=pointer]:
          - /url: http://www.opencart.com
        - text: Qafox.com © 2026
```