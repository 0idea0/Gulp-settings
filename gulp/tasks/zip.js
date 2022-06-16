import del from "del";
import zipPlugin from "gulp-zip";

export const zip = () => {
    del(`./${app.path.buildFolder}.zip`);
    return app.gulp.src(`${app.path.buildFolder}/**/*.*`, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                titile: "ZIP",
                message: "Error: <%= errror.message %>"
            })
        ))
        .pipe(zipPlugin(`${app.path.rootFolder}.zip`))
        .pipe(app.gulp.dest('./'));
}