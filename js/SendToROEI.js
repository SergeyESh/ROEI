let data = [
    {
     "arshNum": "С-МА/29-03-2023/234325007",
     "typeSI": "74910-19",
     "verifDate": "29.03.2023",
     "validDate": "28.03.2025",
     "conclusion": "Пригодно",
     "verifSurname": "Шамшин"
    }
 ];
 
const selectors = {
    success: '#mainDialog > fgis-modal > div > div.fgis-modal__content > div.fgis-modal__body > p',
    btnPlus: "body > fgis-root > div > fgis-roei > fgis-roei-verification-measuring-instruments > div > div > div.header-block > fgis-table-toolbar > section > div > div.left-side > div > fgis-toolbar > div > div:nth-child(1) > fgis-toolbar-button > button",
    btnCheck: "body > fgis-root > div > fgis-roei > fgis-verification-measuring-instruments-card-edit > fgis-verification-measuring-instruments-card-edit-toolbar > div > fgis-toolbar > div > div:nth-child(1) > fgis-toolbar-button > button",
    arshNum: "fgis-card-edit-row-two-columns:nth-child(1) > fgis-card-edit-row:nth-child(1) > div.card-edit-row__content > fgis-field-input > fgis-field-wrapper > div > div > input",
    typeSI: "fgis-card-edit-row-two-columns:nth-child(1) > fgis-card-edit-row:nth-child(2) > div.card-edit-row__content > fgis-field-input > fgis-field-wrapper > div > div > input",
    verifDate: "fgis-card-edit-row-two-columns:nth-child(2) > fgis-card-edit-row:nth-child(1) > div.card-edit-row__content > fgis-field-calendar > fgis-field-wrapper > div > div > fgis-calendar > div > div > input",
    validDate: "fgis-card-edit-row-two-columns:nth-child(2) > fgis-card-edit-row:nth-child(2) > div.card-edit-row__content > fgis-field-calendar > fgis-field-wrapper > div > div > fgis-calendar > div > div > input",
    conclusion: {
      first: "body > fgis-root > div > fgis-roei > fgis-verification-measuring-instruments-card-edit > div > div > div > div > fgis-verification-measuring-instruments-card-edit-common > fgis-card-block > div > div.card-block__container > div > fgis-card-edit-row:nth-child(3) > div.card-edit-row__content > fgis-field-selectbox > fgis-field-wrapper > div > div > fgis-selectbox > div > div > div.fgis-selectbox__single-placeholder.ng-star-inserted",
      second: "body > fgis-root > fgis-select-dropdown > div > div > div.fgis-selectbox__filter.ng-star-inserted > input",
      third: "body > fgis-root > fgis-select-dropdown > div > div > div.fgis-selectbox__options > fgis-virtual-list > div > div.virtual-list__view > div > fgis-virtual-list-item > li > div",
      forth: "body > fgis-root > div > fgis-roei > fgis-verification-measuring-instruments-card-edit > div > div > div > div > fgis-verification-measuring-instruments-card-edit-common > fgis-card-block > div > div.card-block__container > div > fgis-card-edit-row:nth-child(3) > div.card-edit-row__content > fgis-field-selectbox > fgis-field-wrapper > div > div > fgis-selectbox > div > div > div.fgis-selectbox__single-value.ng-star-inserted",
    },
    verifSurname: {
      first: "body > fgis-root > div > fgis-roei > fgis-verification-measuring-instruments-card-edit > div > div > div > div > fgis-verification-measuring-instruments-card-edit-common > fgis-card-block > div > div.card-block__container > div > fgis-card-edit-row:nth-child(5) > div.card-edit-row__content > fgis-field-selectbox > fgis-field-wrapper > div > div > fgis-selectbox > div > div > div.fgis-selectbox__single-placeholder.ng-star-inserted",
      second: "body > fgis-root > fgis-select-dropdown > div > div > div.fgis-selectbox__filter.ng-star-inserted > input",
      third: "body > fgis-root > fgis-select-dropdown > div > div > div.fgis-selectbox__options > fgis-virtual-list > div > div.virtual-list__view > div:last-child > fgis-virtual-list-item > li > div",
      forth: "body > fgis-root > div > fgis-roei > fgis-verification-measuring-instruments-card-edit > div > div > div > div > fgis-verification-measuring-instruments-card-edit-common > fgis-card-block > div > div.card-block__container > div > fgis-card-edit-row:nth-child(5) > div.card-edit-row__content > fgis-field-selectbox > fgis-field-wrapper > div > div > fgis-selectbox > div > div > div.fgis-selectbox__single-value.ng-star-inserted",
    },
    btnOk: "body > fgis-root > fgis-dialog > fgis-modal > div > div > div:nth-child(3) > div > button"
  };
  
  const clickPlusBtn = (document) => {
    console.log("Ищу кнопку +");
    return new Promise(async (resolve, reject) => {
      const btn = await searcher(document, selectors.btnPlus)
      btn.click()
      resolve()
    });
  };
  
  const clickOkbtn = (document) => {
    console.log("Ищу кнопку ОК");
    return new Promise(async (resolve, reject) => {
      const btn = await searcher(document, selectors.btnOk)
      btn.click()
      resolve()
    });
  }
  
  const insertData = async (document, row) => {
    console.log("Вствляю данные");
    return new Promise(async (resolve, reject) => {
      const inputEvent = new Event("input");
  
      const arshNumInput = document.querySelector(selectors.arshNum);
      const typeSIInput = document.querySelector(selectors.typeSI);
      const verifDateInput = document.querySelector(selectors.verifDate);
      const validDateInput = document.querySelector(selectors.validDate);
      const conclusionDiv = document.querySelector(selectors.conclusion.first);
      const verifSurnameDiv = document.querySelector(selectors.verifSurname.first);
  
      arshNumInput.value = row.arshNum;
      arshNumInput.dispatchEvent(inputEvent);
  
      typeSIInput.value = row.typeSI;
      typeSIInput.dispatchEvent(inputEvent);
  
      verifDateInput.value = row.verifDate;
      verifDateInput.dispatchEvent(inputEvent);
  
      if (row.conclusion == "Пригодно") {
        validDateInput.value = row.validDate;
        validDateInput.dispatchEvent(inputEvent);
      }
  
      await insertConclusion(document, conclusionDiv, row)
      await insertVerifSurname(document, verifSurnameDiv, row)
  
      window.focus()
  
      document.querySelector(selectors.btnCheck).click();
  
      let msg = await searcher(document, selectors.success)
      msg = msg.innerText
      console.log(`([${row.arshNum}] [${row.typeSI}] [${row.conclusion}] [${row.verifSurname}]) => ${msg}`);
      await sleep(500, 'Жду отправки данных')
  
      await loading(document)
  
      resolve(msg === 'Черновик успешно сохранен')
  
    });
  };
  
  
  async function insertConclusion(document, conclusionDiv, row) {
    return new Promise(async (resolve, reject) => {
      conclusionDiv.click()
      const second = await searcher(document, selectors.conclusion.second)
      second.value = row.conclusion;
      second.dispatchEvent(new Event("input"));
      const waiter = new Promise(async (resolve, reject) => {
        for (let n = 0; n < 50; n++) {
          const third = await searcher(document, selectors.conclusion.third)
          if (third.innerText === row.conclusion) {
            third.click()
            resolve()
            break
          } else {
            await sleep(300, 'Ожидание подгрузки списка заключений')
          }
        }
        reject('Ошибка подгрузки списка заключений')
      })
      waiter.then(()=> resolve())
    })
  }
  
  async function insertVerifSurname(document, verifSurnameDiv, row) {
    return new Promise(async (resolve, reject) => {
      verifSurnameDiv.click()
      const second = await searcher(document, selectors.verifSurname.second)
      second.value = row.verifSurname
      second.dispatchEvent(new Event("input"));
      const waiter = new Promise(async (resolve, reject) => {
        for (let n = 0; n < 50; n++) {
          const third = await searcher(document, selectors.verifSurname.third)
          if (third.innerText === row.verifSurname) {
            third.click()
            resolve()
            break
          } else {
            await sleep(300, 'Ожидание подгрузки списка фамилий поверителей')
          }
        }
        reject('Ошибка подгрузки списка фамилий поверителей')
      })
      waiter.then(()=> resolve())
    })
  }
  
  
  //utils-----------------------------------------------------------
  
  function sleep(ms, msg) {
    //console.log(`sleep ${ms}ms ${msg}`);
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  function searcher(document, selector) {
    return new Promise(async (resolve, reject) => {
      for (let n = 0; n < 600; n++) {
        const node = document.querySelector(selector);
        if (node) {
          resolve(node)
          break
        } else {
          await sleep(100, "Задержка поисковика")
        }
      }
      reject('Ошибка поиска: ' + selector)
    })
  }
  
  function loading(document) {
    return new Promise(async (resolve, reject) => {
      for (let n = 0; n < 3600; n++) {
        const loader = await searcher(document,'body > fgis-root > fgis-waiter > div')
        if (loader.hidden) {
          resolve()
          break
        } else {
          await sleep(100,"Жду завершения загрузки страницы")
        }
      }
      reject("Ошибка ожидания загрузки страницы")
    })
  }
  
  //---------------------------------------------------------------
  
  function main(row) {
    return new Promise(async (resolve, reject) => {
      await clickPlusBtn(document);
      const success = await insertData(document, row);
      await clickOkbtn(document);
      resolve(success);
    });
  }
  
  function retry(row) {
    return new Promise(async (resolve, reject) => {
      for (let n = 0; n < 20; n++) {
        console.log(`Попытка №${n + 1}`);
        const success = await main(row)
        if (success) {
          resolve()
          break
        }
      }
    })
  }
  
  async function go() {
    for (const row of data) {
      await retry(row);
    }
  }