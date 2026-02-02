# React Quiz Projesini GitHub'a Atma

## 1. Değişiklikleri commit et (yerel)

Proje klasöründe (`react-quiz/react-quiz/`) terminalde:

```bash
cd /Users/emirkocaoglu/Desktop/react-quiz/react-quiz

# Tüm değişiklikleri ekle
git add .

# Commit at
git commit -m "React Quiz - useReducer ile quiz uygulaması"
```

## 2. GitHub'da yeni repo oluştur

1. https://github.com/new adresine git
2. **Repository name:** `react-quiz` (veya istediğin isim)
3. **Public** seç
4. **"Add a README"** işaretleme (zaten yerelde var)
5. **Create repository** tıkla

## 3. Remote ekleyip push et

GitHub repo oluşturduktan sonra sayfada gösterilen komutları kullan. Kullanıcı adın `KULLANICI_ADIN` ve repo adın `react-quiz` ise:

```bash
git remote add origin https://github.com/KULLANICI_ADIN/react-quiz.git
git branch -M main
git push -u origin main
```

Veya SSH kullanıyorsan:

```bash
git remote add origin git@github.com:KULLANICI_ADIN/react-quiz.git
git branch -M main
git push -u origin main
```

---

**Not:** İlk kez push’ta GitHub kullanıcı adı ve şifre/token isteyebilir. Şifre yerine **Personal Access Token** kullanman gerekir (Settings → Developer settings → Personal access tokens).
