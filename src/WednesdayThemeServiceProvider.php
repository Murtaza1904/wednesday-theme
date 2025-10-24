<?php

declare(strict_types=1);

namespace Murtaza1904\WednesdayTheme;

use Illuminate\Support\ServiceProvider;

final class WednesdayThemeServiceProvider extends ServiceProvider
{
    public function boot(): void
    {
        $this->publishes([
            __DIR__ . '/../resources/css' => public_path('vendor/murtaza1904/wednesday-theme/resources/css'),
            __DIR__ . '/../resources/js'  => public_path('vendor/wednesday-theme/resources/js'),
        ], 'wednesday-theme-assets');
    }

    public function register(): void
    {
        $this->app->singleton(ThemeManager::class, fn () => new ThemeManager('wednesday'));
    }
}
