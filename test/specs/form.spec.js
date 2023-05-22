describe('Form Test', () => {
    it('acess and fill form menu', async () => {
        await $('~Forms').click()
        await $('~text-input').setValue('Lucas Jardim')               
        await $('~Dropdown').click()
        await $('android=new UiSelector().text("This app is awesome")').click()
        await $('~switch').click()
        await $('~button-Active').click() 
        expect (await $('~android:id/message')).toBeDisplayed()  
    });
});