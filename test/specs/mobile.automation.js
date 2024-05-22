describe('Scenario mobile automation', () => {
  it('should input text into a Name field', async () => {
      // Temukan elemen field yang ingin diisi dengan menggunakan selector yang sesuai
      const inputName = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[1]/android.widget.FrameLayout/android.widget.EditText');
      
      // Bersihkan field sebelum menginputkan teks baru
      await inputName.clearValue();
      
      // Input teks baru ke dalam field
      await inputName.setValue('Cahyo Eko');
      
      // Pastikan teks telah berhasil diinputkan dengan memeriksa nilai field
      const NameValue = await inputName.getText();
      expect(NameValue).toBe('Cahyo Eko');
  });

  it('should input text into a Weight field', async () => {
    // Temukan elemen field yang ingin diisi dengan menggunakan selector yang sesuai
    const WeightField = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[2]/android.widget.FrameLayout/android.widget.EditText');
    
    // Bersihkan field sebelum menginputkan teks baru
    await WeightField.clearValue();
    
    // Input teks baru ke dalam field
    await WeightField.setValue('50');
    
    // Pastikan teks telah berhasil diinputkan dengan memeriksa nilai field
    const WeightValue = await WeightField.getText();
    expect(WeightValue).toBe('50');
  });

  it('should input text into a Height field', async () => {
    // Temukan elemen field yang ingin diisi dengan menggunakan selector yang sesuai
    const HeightField = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.LinearLayout[3]/android.widget.FrameLayout/android.widget.EditText');
    
    // Bersihkan field sebelum menginputkan teks baru
    await HeightField.clearValue();
    
    // Input teks baru ke dalam field
    await HeightField.setValue('165');
    
    // Pastikan teks telah berhasil diinputkan dengan memeriksa nilai field
    const HeightValue = await HeightField.getText();
    expect(HeightValue).toBe('165');
  });

  it('should select gender male', async () => {
    // Pilih gender dengan mengklik elemen yang sesuai
    await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RadioGroup/android.widget.RadioButton[1]').click();
  });

  it('should click "Next" button', async () => {
    // Klik tombol Next untuk melanjutkan
    await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button').click();
  });

  it('should validate the new page', async () => {
    // Validasi halaman baru dengan elemen "Aktivitas sehari-hari"
    const expectedElement = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.TextView[2]');
    const isDisplayed = await expectedElement.isDisplayed();
    expect(isDisplayed).toBe(true);
  });

  it('should click "Mendaki gunung,dsj"', async () => {
    // Klik tombol Next untuk melanjutkan
    await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.RadioGroup/android.widget.RadioButton[7]').click();
  });

  it('should click "selesai"', async () => {
    // Klik tombol Next untuk melanjutkan
    await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout/android.view.ViewGroup/android.widget.Button').click();
  });

  it('should validate the page result', async () => {
    // Validasi halaman dengan elemen "Ready to some calories today?"
    const expectedElement = await $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.view.ViewGroup/android.widget.FrameLayout[2]/android.view.ViewGroup/android.widget.FrameLayout[1]/android.view.ViewGroup/android.widget.TextView[2]');
    const isDisplayed = await expectedElement.isDisplayed();
    expect(isDisplayed).toBe(true);
  });

});
